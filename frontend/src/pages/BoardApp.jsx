import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// CMPS
import { GroupList } from '../cmps/board/GroupList.jsx'

// ACTIONS

export function BoardApp() {
    const dispatch = useDispatch()
    // board from store
    const board = useSelector(state => state.board)
    console.log("🚀 ~ file: BoardApp.jsx ~ line 16 ~ BoardApp ~ board", board)
    
    if (!board) return <h1>Loading... board app</h1>
    return (
        <div className="board-app">
            <h1>board app</h1>
            {/* <BoardHeader /> */}
            <GroupList board={board} />
        </div >
    )
}