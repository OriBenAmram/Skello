import { Divider } from '@material-ui/core';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { DynamicActionModal } from './dynamic-actions/DynamicActionModal';
// import { BiMicrophone } from "react-icons/bi";


// Icons 
import { IoCreateOutline, IoLogOutOutline } from 'react-icons/io5'
import { BiFilterAlt } from 'react-icons/bi'


import { toggleModal } from '../store/app/app.action';
import { logout } from '../store/user/user.actions';
import { setFilter } from '../store/board/board.action';

export function SpeechToText({ event }) {
  const microphoneRef = useRef(null);

  const [isListening, setIsListening] = useState(false);
  const users = useSelector(state => state.userModule.users)
  const filterBy = useSelector(state => state.boardModule.filterBy)
  const dispatch = useDispatch();
  const history = useHistory();

  console.log('users:', users);



  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove('listening');
    SpeechRecognition.stopListening();
  };

  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add('listening');
    SpeechRecognition.startListening({
      language: 'en-US',
      continuous: true,
    });
  };

  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };



  // Commands
  const commands = [
    {
      command: 'Please create a board *',
      callback: (title) => {
        dispatch(toggleModal({ event, type: 'createBoard', isShown: true, title }));
        SpeechRecognition.stopListening();
      }
    },
    {
      command: 'filter by *',
      callback: (name) => {
        console.log('name:', name);
        const memberId = getMemberIdByFullName(name)
        dispatch(setFilter({ txt: filterBy.txt, labels: [...filterBy.labels], members: [...filterBy.members, memberId] }))
        SpeechRecognition.stopListening();
      }
    },
    {
      command: 'search *',
      callback: (txt) => {
        dispatch(setFilter({ txt, labels: [...filterBy.labels], members: [...filterBy.members] }))
        SpeechRecognition.stopListening();
      }
    },
    {
      command: 'clean filter',
      callback: () => {

        dispatch(setFilter({ txt: '', labels: [], members: [] }))
        SpeechRecognition.stopListening();
      }
    },



    {
      command: 'Please logout',
      callback: () => {
        dispatch(logout());
        dispatch(toggleModal({ event, type: '' }));
        history.push(`/login`)
        SpeechRecognition.stopListening();
      }
    }
  ]

  // Command-info for render
  const commandsForRender = [
    { commandTitle: 'Please create a board', Optional: 'board name', icon: <IoCreateOutline className="stt-filter-icon" /> },
    { commandTitle: 'Please logout', optional: null, icon: <IoLogOutOutline /> },
    { commandTitle: 'filter by member', optional: 'member name', icon: <BiFilterAlt className="stt-filter-icon" /> },
    { commandTitle: 'filter by text', optional: 'text', icon: <BiFilterAlt className="stt-filter-icon" /> }
  ]



  // command functions

  const getMemberIdByFullName = (name) => {
    return users.find(user => user.fullname.toLowerCase() === name.toLowerCase())?._id
  }



  const { transcript, resetTranscript } = useSpeechRecognition({ commands })
  return (
    <div className="microphone-wrapper">
      <div className="microphone-container">
        <div className="microphone-icon-container" ref={microphoneRef}>
        </div>
        <section className="instructions-section">

          <h2>{(isListening) ? 'Press the reset button to stop' : 'Press the red circle to start'}</h2>

          {/* Pulse animation circle */}
          <div className={`blob ${(isListening) ? 'recorder' : ''}`} onClick={() => {
            handleListing()
            if (isListening) stopHandle()
          }}></div>
        </section>

        {/* Loader - line pulse */}
        <div className={`mic-loader-container ${(isListening) ? 'recording' : ''}`}>
          <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="microphone-result-container">
        <div className="microphone-result-text">{transcript}</div>

        <button className="microphone-reset btn secondary-btn" onClick={handleReset}>
          Reset
        </button>
      </div>



      <section className="stt-info-container">


        {commandsForRender.map(commandObj =>
          <div className="command-info-preview">
            {commandObj.icon}
            <span className="command-title">"{commandObj.commandTitle}" - in the end: <span className="optional-txt">{(commandObj.optional) ? commandObj.optional : ''}</span></span>

          </div>)}
      </section>

    </div>
  );
}



