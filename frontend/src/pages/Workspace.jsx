import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { Component, useState, useEffect } from 'react'

// FUNCTIONS

// CMPS

// SERVICES


export function Workspace() {
    const dispatch = useDispatch()




    return (
        <section className='workspace-page'>

            <section className='left-side-bar-container'>

            </section>
            <h1>WorkSpace</h1>
        </section>
    )

}

function mapStateToProps({ boardModule }) {
    return {
        boards: boardModule.boards
    }
}
const mapDispatchToProps = {
    loadBoards
}

export const Workspace = connect(mapStateToProps, mapDispatchToProps)(_Workspace)


