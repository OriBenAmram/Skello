import React, { Component, useState, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

// CMPS
import { GroupList } from '../cmps/GroupList.jsx'

// ACTIONS

export function BoardApp() {
    const dispatch = useDispatch()
    // board from store
    const board = useSelector(state => state.board)
    console.log("🚀 ~ file: BoardApp.jsx ~ line 16 ~ BoardApp ~ board", board)

    // CDM
    useEffect(() => {

    }, [])


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