import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';
import {Route} from 'react-router-dom';

// CMPS
import {GroupList} from '../cmps/board/GroupList.jsx';
import {Loader} from '../cmps/Loader.jsx';
import {TaskDetails} from './TaskDetails.jsx';
import {BoardHeader} from '../cmps/board/BoardHeader.jsx';

// ACTIONS
import {loadBoard, handleDrag} from '../store/board/board.action';

export function BoardApp(props) {
  const dispatch = useDispatch();
  const board = useSelector(state => state.boardModule.board);
  console.log('🚀 ~ file: BoardApp.jsx ~ line 18 ~ BoardApp ~ board', board);
  const {id} = props.match.params;

  useEffect(async () => {
    try {
      await dispatch(loadBoard(id));
    } catch (err) {}
  }, []);

  const onDragEnd = result => {
    // DroppableId: "all-groups" when group is dropped
    // Source - start index
    // Destination - end index(where was it dropped)
    // DraggableId - wich element was dragged by id
    // Type - group or task
    const {destination, source, draggableId, type} = result;

    if (!destination) {
      console.log('no destination');
      return;
    }

    dispatch(
      handleDrag(board, source.droppableId, destination.droppableId, source.index, destination.index, type)
    );
  };

  if (!board) return <Loader />;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board-app" style={{background: `${board.style.background}  center center / cover`}}>
        <BoardHeader board={board} />
        <GroupList groups={[...board.groups]} boardId={board._id} board={board} />
      </div>
      <Route path="/board/:boardId/:groupId/:taskId" component={TaskDetails} />
    </DragDropContext>
  );
}
