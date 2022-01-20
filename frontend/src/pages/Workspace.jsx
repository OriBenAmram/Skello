// import { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadBoards, setBoard} from '../store/board/board.action.js';

import {BsPerson} from 'react-icons/bs';

import {BoardList} from '../cmps/workspace/BoardList.jsx';

import {onSaveBoard} from '../store/board/board.action';

export function Workspace() {
  const dispatch = useDispatch();

  const boards = useSelector(state => state.boardModule.boards);

  useEffect(() => {
    dispatch(loadBoards());
  }, []);

  const getStarredBoards = () => {
    return boards.filter(board => board.isStarred);
  };

  const onToggleStarred = (ev, boardId) => {
    ev.preventDefault();
    console.log('onToggleStarred:');

    const board = boards.find(board => board._id === boardId);
    board.isStarred = !board.isStarred;
    dispatch(onSaveBoard(board));
  };

  return (
    <section className="workspace-container">
      <div className="boards-wrapper flex column">
        <div className="boards-preview flex column">
          <div className="boards-preview-title flex align-center">
            <BsPerson className="person-icon" />
            <h3>Starred Boards</h3>
          </div>
          <BoardList boards={getStarredBoards()} onToggleStarred={onToggleStarred} />
        </div>
        <div className="boards-preview">
          <div className="boards-preview-title flex align-center">
            <BsPerson className="person-icon" />
            <h3>Workspace</h3>
          </div>
          <BoardList boards={boards} onToggleStarred={onToggleStarred} />
        </div>
      </div>
    </section>
  );
}
