import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';
import {Route} from 'react-router-dom';
import {socketService} from '../services/socket.service.js';

// Cmps
import {GroupList} from '../cmps/board/GroupList.jsx';
import {Loader} from '../cmps/Loader.jsx';
import {TaskDetails} from './TaskDetails.jsx';
import {BoardHeader} from '../cmps/board/BoardHeader.jsx';

// Action
import {loadBoard, handleDrag, setBoard} from '../store/board/board.action';

export function BoardApp(props) {
  const dispatch = useDispatch();
  const board = useSelector(state => state.boardModule.board);
  const {id} = props.match.params;

  useEffect(() => {
    try {
      socketService.setup();
      // add to all sockets board id
      socketService.emit('join-board', id);
      // get updated board from backend
      socketService.off('updated-board');
      socketService.on('updated-board', async updatedBoard => {
        console.log('UPDATED board from backend', updatedBoard);
        await dispatch(setBoard(updatedBoard));
      });
      onLoadBoard();
    } catch (err) {
      console.log('Cannot load board', err);
    }

    return () => {
      socketService.off('updated-board', () => {
        console.log('I RUN FROM SOCKET OFF IN UNMOUNT');
      });
      socketService.terminate();
      clearBoard();
    };
    // return () => {
    //   console.log('UNMOUNT');
    //   socketService.off('updated-board', () => {
    //     console.log('I RUN FROM SOCKET OFF IN UNMOUNT');
    //   });
    //   socketService.terminate();
    //   // await dispatch(setBoard(null));
    // };
  }, []);

  const onLoadBoard = () => {
    dispatch(loadBoard(id));
  };

  const clearBoard = () => {
    dispatch(setBoard(null));
  };

  const onDragEnd = result => {
    // DroppableId: "all-groups" when group is dropped
    // Source - start index
    // Destination - end index(where was it dropped)
    // Type - group or task
    const {destination, source, type} = result;

    if (!destination) return;

    dispatch(
      handleDrag(board, source.droppableId, destination.droppableId, source.index, destination.index, type)
    );
  };

  if (!board) return <Loader />;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        className="board-app-wrapper"
        style={{background: `${board.style.background}  center center / cover`}}>
        <div className="board-app">
          <BoardHeader board={board} />
          <GroupList groups={[...board.groups]} boardId={board._id} board={board} />
        </div>
      </div>
      <Route path="/board/:boardId/:groupId/:taskId" component={TaskDetails} />
    </DragDropContext>
  );
}
