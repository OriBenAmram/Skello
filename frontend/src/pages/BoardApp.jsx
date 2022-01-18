import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'

// only for now //
import { storageService } from '../services/async-storage.service'


// TODO: Connect To STORE - Action

function _BoardApp() {
    // const [isMenuOpen, setMenuOpen] = useState(false)
 
    useEffect(() => {
        _loadBoard()
        return () => {
          
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
        const data = storageService.query();
        if(data) console.log(data);
      };
    
    return (
        <div className="bopard-app">
            <h1>board app</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = {
}

export const BoardApp = connect(mapStateToProps, mapDispatchToProps)(_BoardApp)
