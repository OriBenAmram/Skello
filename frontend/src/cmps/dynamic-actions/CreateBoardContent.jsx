
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GrClose } from "react-icons/gr";
import boardPreview from '../../assets/imgs/board-preview.svg';

// Actions
import { toggleModal } from '../../store/app/app.action';
import { addBoard } from '../../store/board/board.action';

export function CreateBoardContent({ onToggleModal, isGeneralModal, boardTitle }) {

    const [board, setBoard] = useState({ title: (boardTitle) ? boardTitle : '', style: { background: '#ff9f1a' } });
    const dispatch = useDispatch()

    const setSelectedBackground = (background) => {
        setBoard({ ...board, style: { ...board.style, background: background } })
    }

    const onAddBoard = (event) => {
        if (!board.title) return;
        dispatch(addBoard(board))
        setBoard({ ...board, title: '' });
        (isGeneralModal) ? dispatch(toggleModal({ event, type: 'createBoard' }))
            : onToggleModal({ event, type: 'createBoard' });

    }

    const closeModal = (event) => {
        (isGeneralModal) ? dispatch(toggleModal({ event, type: 'createBoard' }))
            : onToggleModal({ event, type: 'createBoard' });
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
        { title: 'rose', url: "url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/df67a68103908e4528738b04b4785906/photo-1469204691332-56e068855403.jpg)" },
        { title: 'computer', url: "url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/d8a2e950e141c3c8173e76cd4b7d98a1/photo-1640622658799-54e6039d189b.jpg)" },
        { title: 'dog', url: "url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/632e14d3d4c046b35d6617562d2d4485/photo-1534361960057-19889db9621e.jpg)" },
        { title: 'house', url: "url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/a2df3a25a59d01dc0664e4898693d333/photo-1568605114967-8130f3a36994.jpg)" },

    ]
    return (
        <section className="create-board-modal">
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={(event) => closeModal(event)}><GrClose className='btn-content' /></button>
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