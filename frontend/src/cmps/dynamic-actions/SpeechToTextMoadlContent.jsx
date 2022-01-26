import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GrClose } from "react-icons/gr";

// cmps
import { SpeechToText } from '../SpeechToText';
// Actions
import { addChecklist } from '../../store/board/board.action';

export function SpeechToTextModalContent({ board, group, task, toggleModal }) {



    return (

        <section className="stt-modal">

            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content' /></button>
                speech to text
            </section>

            <div>
                <SpeechToText />

            </div>

        </section>

    )
}