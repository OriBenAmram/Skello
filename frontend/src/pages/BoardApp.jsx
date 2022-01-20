import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// CMPS
import { GroupList } from '../cmps/board/GroupList.jsx';
import { Loader } from '../cmps/Loader.jsx';

// ACTIONS
import { loadBoard } from '../store/board/board.action';

export function BoardApp(props) {
  const dispatch = useDispatch();
  const board = useSelector(state => state.boardModule.board);
  console.log('board:', board);
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
      console.log('cant load board', err);
    }
    // }
  }, []);

  if (!board) return <Loader />;
  return (
    <div className="board-app">
      <h1>board app</h1>
      {/* <BoardHeader /> */}
      <GroupList board={board} />
    </div>
  );
}
