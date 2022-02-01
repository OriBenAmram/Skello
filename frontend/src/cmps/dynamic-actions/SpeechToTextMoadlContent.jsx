import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GrClose } from "react-icons/gr";

// cmps
import { SpeechToText } from '../SpeechToText';

// Actions
import { toggleModal } from '../../store/app/app.action'
import { addChecklist } from '../../store/board/board.action';

export function SpeechToTextModalContent({ onToggleModal, event, isListening }) {

    const dispatch = useDispatch()


    return (

        <div className="stt-modal">

            <section className='modal-header'>
                {/* <BsInfo className="info-icon" /> */}
                <button className='simple-close-btn' onClick={(event) => dispatch(toggleModal({ event, type: 'stt' }))}><GrClose className='btn-content' /></button>
                Speech to text
            </section>

            <section className="stt-main-content">
                <SpeechToText event={event} isListening={isListening} />
            </section>

        </div>

    )
}