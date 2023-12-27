import React, { useState } from 'react';
const SpeechRecognitionComponent = () => {
    const [listening, setListening] = useState(false);
    const [transcript, setTranscript] = useState('');

    const startRecognition = () => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            setListening(true);
        };

        recognition.onresult = (event) => {
            const newTranscript = event.results[0][0].transcript;
            setTranscript(newTranscript);
        };

        recognition.onend = () => {
            setListening(false);
        };

        recognition.start();
    };

    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-xs-12 col-md-6">
                <button
                    id="startButton"
                    className={`btn btn-${listening ? 'danger' : 'primary'}`}
                    onClick={startRecognition}
                    style={{ width: '100%' }}
                >
                    {listening ? 'Listening...' : 'Start Voice Input'}
                </button>
            </div>
        </div>
        <div className="row mt-3 justify-content-center">
            <div className="col-xs-12 col-md-6">
                <div id="output" className="bg-light p-3">
                    {transcript}
                </div>
            </div>
        </div>
    </div>  
    );
};

export default SpeechRecognitionComponent;
