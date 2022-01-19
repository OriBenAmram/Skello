import React, { Component, useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

// CMPS
import { GroupList } from '../cmps/GroupList.jsx'

// ACTIONS
import { loadBoard } from '../store/board/board.action.js'

export function BoardApp() {
    const dispatch = useDispatch()
    // board from store
    const board = useSelector(state => state.board)
    console.log("🚀 ~ file: BoardApp.jsx ~ line 16 ~ BoardApp ~ board", board)
    
    // CDM
    useEffect(() => {
        dispatch(loadBoard())
        // loadBoard()
    }, [])

////////////////////////////////////////////////////////////////////////
// Use dispatch actions
// import {saveCar} from ....
// const dispatch = useDispatch()
// dispatch (saveCar(car))

// our store
// const cars =  useSelector (state=> state.cars)
//////////////////////////////////////////////////////////////////////

    
    if (!board) return <h1>Loading...</h1>
    return (
        <div className="board-app">
            <h1>board app</h1>
            {/* Board header navbar */}
            {/* <BoardHeader /> */}
            <GroupList board={board} />
        </div >
    )
}