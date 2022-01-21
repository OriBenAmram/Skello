import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { Route } from 'react-router-dom';

// CMPS
import { GroupList } from '../cmps/board/GroupList.jsx';
import { Loader } from '../cmps/Loader.jsx';
import { TaskDetails } from './TaskDetails.jsx';

// ACTIONS
import { loadBoard } from '../store/board/board.action';

export function BoardApp(props) {
  const dispatch = useDispatch();
  const board = useSelector(state => state.boardModule.board);
  const { id } = props.match.params;
  const style = board ? board.style : '';

  useEffect(async () => {
    try {
      await dispatch(loadBoard(id));
    } catch (err) {
    }
  }, []);



  // console.log('board', board);


  const onDragEnd = () => {
    //TODO: reordering logic
    ('Drag End');
  };

  if (!board) return <Loader />;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board-app" style={{ background: `${board.style.background}  center center / cover` }}>
        <h1>board app</h1>
        {/* <BoardHeader /> */}
        <GroupList groups={[...board.groups]} boardId={board._id} board={board} />
      </div>
      <Route path='/board/:boardId/:groupId/:taskId' component={TaskDetails} />
    </DragDropContext >

  );
}
