import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GrClose } from "react-icons/gr";
import { BsInfoSquare } from 'react-icons/bs'

// cmps
import { SpeechToText } from '../SpeechToText';

// Actions
import { addChecklist } from '../../store/board/board.action';

export function SpeechToTextModalContent({ board, group, task, onToggleModal, event, isListening }) {

    const dispatch = useDispatch()


    return (

        <section className="stt-modal">

            <section className='modal-header'>
                {/* <BsInfoSquare className="" /> */}
                <button className='simple-close-btn' onClick={() => dispatch(onToggleModal({ event, type: 'stt' }))}><GrClose className='btn-content' /></button>
                Speech to text
            </section>

            <div>
                <SpeechToText event={event} isListening={isListening} />
            </div>

        </section>

    )
}