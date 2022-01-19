import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'

// only for now //
import { storageService } from '../services/async-storage.service'


// TODO: Connect To STORE - Action

export function BoardApp() {
    // const [isMenuOpen, setMenuOpen] = useState(false)
    // const board = useSelector(state => state.board)
    // const dispatch = useDispatch(function)
    useEffect(() => {
        _loadBoard()
        return () => {
            // dispatch(actionfunc)
        }
    }, [])

    // useEffect(() => {
    // }, [])

    // const addMsg = (newMsg) => {
    //     setMsgs(prevMsgs => [...prevMsgs, newMsg])
    //     if (!toy.msgs) toy.msgs = [];
    //     toy.mags.push(newMsg)
    //     // action
    // }

    const _loadBoard = async () => {
        const data = storageService.query('boardDB');
        if (data) console.log(data);
    };

    return (
        <div className="board-app">
            <h1>board app</h1>
        </div>
    )
}