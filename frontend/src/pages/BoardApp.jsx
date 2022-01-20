import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { TaskDetails } from '../pages/TaskDetails.jsx';


// CMPS
import { GroupList } from '../cmps/board/GroupList.jsx';
import { Loader } from '../cmps/Loader.jsx';

// ACTIONS
import { loadBoard } from '../store/board/board.action';

export function BoardApp(props) {
  const dispatch = useDispatch();
  const board = useSelector(state => state.boardModule.board);
  // const [board, setBoard] = useState(null);
  const { id } = props.match.params;

  useEffect(async () => {
    // if (!id) this.props.history.push('/workspace');
    // else {
    try {
      await dispatch(loadBoard(id));
      console.log('continued after dispatch')
      // if (!board) props.history.push('/workspace');
      // else setBoard(board);
    } catch (err) {
    }
    // }
  }, []);

  if (!board) return <Loader />;
  return (
    <div className="board-app">
      <h1>board app</h1>
      <Route path="/board/:boardId/:groupId/:taskId" exact component={TaskDetails} />
      {/* <BoardHeader /> */}
      <GroupList board={board} />
    </div>
  );
}
