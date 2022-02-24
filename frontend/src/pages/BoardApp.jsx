import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { Route, useHistory } from 'react-router-dom';
import { socketService } from '../services/socket.service.js';

// Cmps
import { GroupList } from '../cmps/board/GroupList.jsx';
import { Loader } from '../cmps/Loader.jsx';
import { TaskDetails } from './TaskDetails.jsx';
import { BoardHeader } from '../cmps/board/BoardHeader.jsx';
import { QuickCardEditor } from '../cmps/board/QuickCardEditor';

// Action
import { loadBoard, handleDrag, setBoard } from '../store/board/board.action';
import { boardService } from '../services/board.service.js';

export function BoardApp(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  // const [board, setBoard] = useState(null);
  const board = useSelector(state => state.boardModule.board);
  const [quickCardEditor, setQuickCardEditor] = useState({ taskToEdit: null, groupId: '', position: {}, style: {} });
  const { id } = props.match.params;

  // position 
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const [windowHeight, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }


  useEffect(() => {
    try {
      socketService.setup();
      // add to all sockets board id
      socketService.emit('join-board', id);
      // get updated board from backend
      socketService.off('updated-board');
      socketService.on('updated-board', async updatedBoard => {
        await dispatch(setBoard(updatedBoard));
      });
      onLoadBoard();
    } catch (err) {
      console.log('Cannot load board', err)
    }

    // Unmount
    return () => {
      socketService.off('updated-board', () => {
      });
      socketService.terminate();
      clearBoard();
    };

  }, []);

  const toggleQuickCardEditor = (event, task, groupId) => {
    event.stopPropagation();
    const parentElement = task ? event.currentTarget.parentNode : null;
    const position = task ? parentElement.getBoundingClientRect() : {};
    const style = task ? getPositionByTarget(event.target.getBoundingClientRect(), parentElement.getBoundingClientRect()) : {}
    setQuickCardEditor({ taskToEdit: task, groupId, position, style });
  };


  const getPositionByTarget = (eventTarget, parentElementBounding) => {
    const { left, top } = eventTarget
    if (windowHeight - top < 160) return { position: 'fixed', top: top - 180, }
    if (windowWidth - left < 200) {
      return {
        position: 'fixed', right: 15, top
      }
    }
    if (windowWidth - left < 420 && windowHeight - top < 160) {
      return {
        position: 'fixed', top: top - 160, right: 15
      }
    }
    else {
      return {
        position: 'fixed', top: parentElementBounding.top, left: parentElementBounding.left,
      }
    }

  }


  const onOpenTaskFromQuickEdit = (groupId, taskId) => {
    history.push(`${id}/${groupId}/${taskId}`)
  }

  const onLoadBoard = async () => {
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
    const { destination, source, type } = result;

    if (!destination) return;

    dispatch(
      handleDrag(board, source.droppableId, destination.droppableId, source.index, destination.index, type)
    );
  };
  if (!board) return <Loader />;
  return (
    <React.Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        <div
          className="board-app-wrapper"
          style={{ background: `${board.style?.background}` }}>
          <div className="board-app">
            <BoardHeader board={board} />
            <GroupList
              groups={board.groups}
              boardId={board._id}
              board={board}
              toggleQuickCardEditor={toggleQuickCardEditor}
            />
          </div>
        </div>
        <Route path="/board/:boardId/:groupId/:taskId" component={TaskDetails} />
      </DragDropContext>

      {quickCardEditor.taskToEdit && (
        <QuickCardEditor
          taskId={quickCardEditor.taskToEdit.id}
          groupId={quickCardEditor.groupId}
          position={quickCardEditor.position}
          style={quickCardEditor.style}
          toggleQuickCardEditor={toggleQuickCardEditor}
          onOpenTaskFromQuickEdit={onOpenTaskFromQuickEdit}
        />
      )}
      {quickCardEditor.taskToEdit && (
        <div
          onClick={event => {
            toggleQuickCardEditor(event, null, '');
          }}>
          <div className="screen-overlay"></div>
        </div>
      )}
    </React.Fragment>
  );
}
