import { Divider } from '@material-ui/core';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { DynamicActionModal } from './dynamic-actions/DynamicActionModal';
// import { BiMicrophone } from "react-icons/bi";

import { toggleModal } from '../store/app/app.action';
import { logout } from '../store/user/user.actions';

export function SpeechToText({ event }) {
  // const [display, setDisplay] = useState(''); //display for our message
  const [isListening, setIsListening] = useState(false);

  console.log('isListening:', isListening);

  const microphoneRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory()
  console.log('isListening:', isListening);


  const commands = [
    {
      command: 'Please create a board *',
      callback: (title) => {
        console.log('title:', title);

        dispatch(toggleModal({ event, type: 'createBoard', isShown: true, title }));
        SpeechRecognition.stopListening();
      }

    },
    {
      command: 'Please logout',
      callback: (title) => {
        dispatch(logout());
        dispatch(toggleModal({ event, type: '' }));
        history.push(`/login`)
        SpeechRecognition.stopListening();
      }
    }
  ]

  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add('listening');
    SpeechRecognition.startListening({
      language: 'en-US',
      continuous: true,
    });
  };

  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove('listening');
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };

  const { transcript, resetTranscript } = useSpeechRecognition({ commands })
  //pass the commands array to the SpeechRecognition function

  return (
    <div className="microphone-wrapper">
      <div className="microphone-container">
        <div className="microphone-icon-container" ref={microphoneRef}>
          {/* <BiMicrophone className="microphone-icon" /> */}
        </div>
        <section className="instructions-section">

          <h2>{(isListening) ? 'Press the Reset button to stop' : 'Press the Microphone to start'}</h2>

          <div className={`blob ${(isListening) ? 'recorder' : ''}`} onClick={() => {
            handleListing()
            if (isListening) stopHandle()
          }}></div>
        </section>


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
        {/* <textarea className="basic-textarea" >{transcript}</textarea> */}
        <div className="microphone-result-text">{transcript}</div>

        <button className="microphone-reset btn secondary-btn" onClick={handleReset}>
          Reset
        </button>
      </div>

    </div>
  );
}



{/* <button className="secondary-btn">Save</button> */ }
{/* <p>{display}</p> */ }
{/* <button onClick={() => setDisplay('')}>Empty Display</button> */ }
{/* <div className="microphone-status">
  {isListening ? "Listening........." : "Click to start Listening"}
</div>
{isListening && (
  <button className="microphone-stop btn" onClick={stopHandle}>
    Stop
  </button>
)} */}