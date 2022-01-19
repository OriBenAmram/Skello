import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// CMPS
import { GroupList } from '../cmps/board/GroupList.jsx'
import { Loader } from '../cmps/Loader.jsx'

// ACTIONS

export function BoardApp() {
    const dispatch = useDispatch()
    // board from store
    const board = useSelector(state => state.boardModule.board)

    if (!board) return <Loader />
    return (
        <div className="board-app">
            <h1>board app</h1>
            {/* <BoardHeader /> */}
            <GroupList board={board} />
        </div >
    )
}