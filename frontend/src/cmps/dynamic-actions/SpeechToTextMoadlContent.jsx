import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GrClose } from "react-icons/gr";

// cmps
import { SpeechToText } from '../SpeechToText';

// Actions
import { addChecklist } from '../../store/board/board.action';

export function SpeechToTextModalContent({ board, group, task, onToggleModal, event, isListening }) {

    const dispatch = useDispatch()


    return (

        <div className="stt-modal">

            <section className='modal-header'>
                {/* <BsInfo className="info-icon" /> */}
                <button className='simple-close-btn' onClick={() => dispatch(onToggleModal({ event, type: 'stt' }))}><GrClose className='btn-content' /></button>
                Speech to text
            </section>

            <section className="stt-main-content">
                <SpeechToText event={event} isListening={isListening} />
            </section>

        </div>

    )
}