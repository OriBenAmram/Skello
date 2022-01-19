import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// CMPS
import {GroupList} from '../cmps/board/GroupList.jsx';

// ACTIONS
import {loadBoard} from '../store/board/board.action';

export function BoardApp(props) {
  const dispatch = useDispatch();
  const [board, setBoard] = useState(null);
  const {id} = props.match.params;

  useEffect(async () => {
    if (!id) this.props.history.push('/workspace');
    if (id) {
      try {
        const board = await dispatch(loadBoard(id));
        if (!board) props.history.push('/workspace');
        else setBoard(board);
      } catch (err) {
        console.log('cant load board', err);
      }
    }
  }, []);

  if (!board) return <h1>Loading... board app</h1>;
  return (
    <div className="board-app">
      <h1>board app</h1>
      {/* <BoardHeader /> */}
      <GroupList board={board} />
    </div>
  );
}
