import { Divider } from "@material-ui/core";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { DynamicActionModal } from "./dynamic-actions/DynamicActionModal";
// import { BiMicrophone } from "react-icons/bi";

import { toggleModal } from '../store/app/app.action';


export function SpeechToText({ event }) {


  const [display, setDisplay] = useState('') //display for our message
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  const dispatch = useDispatch()



  const commands = [
    {
      command: 'please create board',          //command the user says, * is any input
      callback: (title) => {

        console.log('title:', title);
        console.log('im do it');
        dispatch(toggleModal({ event, type: 'createBoard', isShown: true }));
      }
    }
  ]

  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      language: 'en-US',
      continuous: true,
    });
  };

  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
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
      <div className="mircophone-container">
        <div
          className="microphone-icon-container"
          ref={microphoneRef}

        >
          {/* <BiMicrophone className="microphone-icon" /> */}

        </div>
        <div class={`blob ${(isListening) ? 'recorder' : ''}`} onClick={() => {
          handleListing()
          if (isListening) stopHandle()
        }}></div>

        {/* <div className="microphone-status">
          {isListening ? "Listening........." : "Click to start Listening"}
        </div>
        {isListening && (
          <button className="microphone-stop btn" onClick={stopHandle}>
            Stop
          </button>
        )} */}
      </div>
      {transcript && (
        <div className="microphone-result-container">
          {/* <textarea className="basic-textarea " >{transcript}</textarea> */}
          <div className="microphone-result-text ">{transcript}</div>

          <button className="secondary-btn">Save</button>
          <p>{display}</p>
          <button onClick={() => setDisplay('')}>Empty Display</button>
          <button className="microphone-reset btn delete-primary-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>)
}

// const { transcript, resetTranscript } = useSpeechRecognition();
// const [isListening, setIsListening] = useState(false);
// const microphoneRef = useRef(null);
// if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//   return (
//     <div className="mircophone-container">
//       Sorry, Browser is not Support Speech Recognition.
//     </div>
//   );
// }
// const handleListing = () => {
//   setIsListening(true);
//   microphoneRef.current.classList.add("listening");
//   SpeechRecognition.startListening({
// language: 'en-US'
//     continuous: true,
//   });
// };
// const stopHandle = () => {
//   setIsListening(false);
//   microphoneRef.current.classList.remove("listening");
//   SpeechRecognition.stopListening();
// };
// const handleReset = () => {
//   stopHandle();
//   resetTranscript();
// };


