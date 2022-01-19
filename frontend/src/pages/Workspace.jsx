import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadBoards } from '../store/board/board.action.js'


// FUNCTIONS

// CMPS

// SERVICES


export function Workspace() {
    const dispatch = useDispatch();
    // const boards = useSelector(state => state.boards)

    // const boards = useSelector(state => state.boards)
    // const board = useSelector(state => state.boards)
    // console.log('boards:', boards);



    useEffect(() => {
        dispatch(loadBoards())
    }, [])




    return (
        <section className='workspace-page'>

            <section className='left-side-bar-container'>

            </section>
            <h1>WorkSpace</h1>
        </section>
    )

}











// function mapStateToProps({ boardModule }) {
//     return {
//         boards: boardModule.boards
//     }
// }
// const mapDispatchToProps = {
//     loadBoards
// }

// // export const Workspace = connect(mapStateToProps, mapDispatchToProps)(_Workspace)


// class _Workspace extends Component {






//     render() {
//         const { boards } = this.props
//         if (!boards) return <Loader />
//         return (
//             <section className="workspace-container flex align-flex-start justify-center ">
//                 <div className="boards-wrapper flex column">
//                     <div className="boards-preview flex column">
//                         <div className="preview-title flex align-center">
//                             <i className="far fa-star"></i>
//                             <h3>Starred boards</h3>
//                         </div>
//                         <BoardList onToggleFavorite={this.onToggleFavorite} boards={this.favoriteBoards} />
//                     </div>
//                     <div className="boards-preview">
//                         <div className="preview-title flex align-center">
//                             <BoardIcon />
//                             <h3>Workspace</h3>
//                         </div>
//                         <BoardList onToggleFavorite={this.onToggleFavorite} boards={boards} />
//                     </div>
//                 </div>
//             </section>
//         )
//     }
// }

