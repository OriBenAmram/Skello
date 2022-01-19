import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// CMPS
import { GroupList } from '../cmps/board/GroupList.jsx'

// ACTIONS

export function BoardApp() {
    const dispatch = useDispatch()
    // board from store
    const board = useSelector(state => state.boardModule.board)

    if (!board) return <h1>Loading... board app</h1>
    return (
        <div className="board-app">
            <h1>board app</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora repudiandae fugiat consectetur aliquam eum dolor quisquam nesciunt magni ex molestiae atque nobis similique excepturi eveniet ipsa quaerat sapiente consequuntur, provident odit a numquam sint praesentium nisi. Magni repellat doloremque id aliquid eos iste sit delectus quibusdam nostrum, nam perferendis in fuga rerum eum beatae qui unde omnis. Placeat expedita necessitatibus quasi, perferendis porro, excepturi vero suscipit nam voluptate corporis iste! Magnam iusto eligendi rem a qui harum, accusantium soluta. Quibusdam alias possimus quasi vitae laudantium dicta quidem reprehenderit ullam recusandae consequuntur, sit cumque dignissimos, libero rem nostrum adipisci mollitia distinctio!</p>
            {/* <BoardHeader /> */}
            <GroupList board={board} />
        </div >
    )
}