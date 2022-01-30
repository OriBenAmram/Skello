
import { BsMic } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

import { toggleModal } from '../store/app/app.action';
export function SkellMicAssistant() {

    const dispatch = useDispatch();
    // const [isListening, setIsListening] = useState(false)



    const onMic = (event) => {
        dispatch(toggleModal({ event, type: 'stt', isShown: true }))
        // setIsListening(!isListening)
    }

    return (


        <BsMic className="icon-microphone" onClick={(event) => onMic(event)} />

    )
}


