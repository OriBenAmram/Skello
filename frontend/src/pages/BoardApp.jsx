import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';

// CMPS
import {GroupList} from '../cmps/board/GroupList.jsx';
import {Loader} from '../cmps/Loader.jsx';

// ACTIONS
import {loadBoard, handleDrag} from '../store/board/board.action';

export function BoardApp(props) {
  const dispatch = useDispatch();
  const board = useSelector(state => state.boardModule.board);
  const {id} = props.match.params;
  const style = board ? board.style : '';

  useEffect(async () => {
    try {
      await dispatch(loadBoard(id));
      console.log('continued after dispatch');
    } catch (err) {
      console.log('cant load board', err);
    }
  }, []);

  const onDragEnd = result => {
    // DroppableId: "all-groups" when group is dropped
    // Source - start index
    // Destination - end index(where was it dropped)
    // DraggableId - wich element was dragged by id
    // Type - group or task
    const {destination, source, draggableId, type} = result;

    if (!destination) return;

    dispatch(
      handleDrag(board, source.droppableId, destination.droppableId, source.index, destination.index, type)
    );
  };

  if (!board) return <Loader />;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board-app" style={{background: style.background}}>
        <h1>board app</h1>
        {/* <BoardHeader /> */}
        <GroupList groups={[...board.groups]} boardId={board._id} board={board} />
      </div>
    </DragDropContext>
  );
}
