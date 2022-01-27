
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GrClose } from "react-icons/gr";
import boardPreview from '../../assets/imgs/board-preview.svg';

// Actions

import { addBoard } from '../../store/board/board.action';
export function CreateBoardContent({ toggleModal }) {

    const [board, setBoard] = useState({ title: '', style: { background: '#ff9f1a' } });
    const dispatch = useDispatch()



    const setSelectedBackground = (background) => {
        setBoard({ ...board, style: { ...board.style, background: background } })
    }

    const onAddBoard = (event) => {
        if (!board.title) return;
        dispatch(addBoard(board))
        setBoard({ ...board, title: '' })
        toggleModal({ event, type: 'createBoard' })
    }

    const gColors = [
        // green
        '#61bd4f',
        //yellow
        '#f2d600',
        // orange
        '#ff9f1a',
        // red
        '#ed5a46',
        // pruple
        '#c377e0',
        // light green
        '#51e898',

    ]

    const gImages = [
        { title: 'forest', url: "url(https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80)" },
        { title: 'bird', url: "url(https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)" },
        { title: 'sea', url: "url(https://images.unsplash.com/photo-1553570739-330b8db8a925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)" },
        { title: 'sunset', url: "url(https://images.unsplash.com/photo-1422493757035-1e5e03968f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1408&q=80)" },

    ]

    console.log(gImages[0])


    return (
        <section className="create-board-modal">
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content' /></button>
                Create Board
            </section>
            <section className="modal-details">
                <div className="board-preview-wrapper">
                    <div className="board-preview-container" style={{ background: `${board.style.background}  center center / cover` }}>
                        <img src={boardPreview} alt="" />

                    </div>
                </div>
                <div className="background-container">
                    <div>
                        <label>
                            Background
                        </label>

                    </div>
                    <div className="background-picker">
                        <ul className="background-list clean-list flex">
                            {gImages.map((img, idx) => <li key={idx} className="img-container">
                                <button className="background-select"
                                    type="button"
                                    onClick={() => { setSelectedBackground(img.url) }}
                                    style={{ background: `${img.url} center center / cover` }}
                                >

                                </button>
                            </li>)}
                        </ul>
                        <ul className="background-list clean-list flex">
                            {gColors.map((color, idx) => <li key={idx}>
                                <button className="background-select"
                                    onClick={() => setSelectedBackground(color)}
                                    type="button"
                                    style={{ backgroundColor: `${gColors[idx]}` }}
                                >
                                </button>
                            </li>)}
                        </ul>
                    </div>
                    <label>
                        Board Title
                    </label>

                    <input type="text"
                        className="add-board-title"
                        value={board.title}
                        onChange={(ev) => setBoard({ ...board, title: ev.target.value })}
                    />

                    <button className={`create-btn ${(board.title) ? 'filled' : ''}`} onClick={(event) => onAddBoard(event)} >
                        Create
                    </button>
                </div>
            </section>
        </section >
    )
}