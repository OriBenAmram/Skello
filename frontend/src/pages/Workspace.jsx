import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadBoards, setBoard } from '../store/board/board.action.js'
import { BoardList } from '../cmps/workspace/BoardList.jsx';



export function Workspace() {
    const dispatch = useDispatch();

    const boards = useSelector(state => state.boardModule.boards)


    useEffect(() => {
        dispatch(loadBoards())
    }, [])

    const onSetBoard = (boardId) => {
        dispatch(setBoard(boardId))
    }



    return (
        <section className='workspace-page'>

            <section className='left-side-bar-container'>

            </section>
            <h3>Workspace</h3>
            <BoardList
                onSetBoard={onSetBoard}
                boards={boards} />
        </section >
    )

}

