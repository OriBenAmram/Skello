import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import { BiMicrophone } from "react-icons/bi";



export function SpeechToText() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Sorry, Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
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

          <button className="microphone-reset btn delete-primary-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
