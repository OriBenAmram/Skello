import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBoards, setBoard } from '../store/board/board.action.js';
import { BoardList } from '../cmps/workspace/BoardList.jsx';

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
        <section className="workspace-page">
            <section className="left-side-bar-container"></section>
            <h3>Favorites Boards</h3>
            <BoardList boards={getFavoriteBoards} onToggleFavorite={onToggleFavorite} />
            <h3>Workspace</h3>
            <BoardList boards={boards} onToggleFavorite={onToggleFavorite} />
        </section>
    );
}
