import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBoards, setBoard } from '../store/board/board.action.js';
import { BoardList } from '../cmps/workspace/BoardList.jsx';
import { BsPerson } from 'react-icons/bs';




export function Workspace() {
    const dispatch = useDispatch();

    const boards = useSelector(state => state.boardModule.boards);

    useEffect(() => {
        dispatch(loadBoards());
    }, []);

    const getFavoriteBoards = () => {
        const { boards } = this.props
        return boards.filter(board => board.isFavorite)
    }

    const onToggleFavorite = (ev, boardId) => {
        ev.preventDefault();
        const board = boards.find(board => board._id === boardId);
        board.isFavorite = !board.isFavorite;
        // dispatch(onSaveBoard(boardId));
    }

    // const onSetBoard = (boardId) => {
    //     dispatch(setBoard(boardId))
    // }

    return (
        <section className="workspace-container">
            <div className="boards-wrapper">
                <div className="boards-preview">
                    <div className="boards-preview-title">
                        <BsPerson className='person-icon' />
                        <h3>staered Boards</h3>
                    </div>
                    <BoardList boards={getFavoriteBoards} onToggleFavorite={onToggleFavorite} />
                </div>
                <div className="boards-preview">
                    <div className="boards-preview-title">
                        <BsPerson className='person-icon' />
                        <h3>Workspace</h3>
                    </div>
                    <BoardList boards={boards} onToggleFavorite={onToggleFavorite} />
                </div>
            </div>

        </section>
    );
}
