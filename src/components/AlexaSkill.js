import React, { useState } from 'react';
import axios from 'axios';

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

            // Send voice input to serverless API
            const apiUrl = 'https://uqdsaoirox4a2fkxe4tl6pvi7q0orwpu.lambda-url.us-east-1.on.aws/'; // Replace with your actual URL
            const data = {
                text: newTranscript,
            };
            axios.post(apiUrl, data)
                .then((response) => {
                    // Handle successful API call
                    console.log('Voice input sent and response received');
                    if (response.data && response.data.alexaResponse) {
                        // Update UI with Alexa skill response (e.g., display text or take action)
                        console.log('Alexa skill response:', response.data.alexaResponse);
                        // ... Use response data in your ReactJS app ...
                    } else {
                        console.warn('No Alexa skill response received');
                    }
                })
                .catch((error) => {
                    console.error('Error sending voice input or receiving response:', error);
                })


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
            {/* Add your loading indicator here, e.g., a spinner while API call is in progress */}
        </div>
    );
};

export default SpeechRecognitionComponent;
