import React, { useState } from 'react';
import axios from 'axios';

const SpeechRecognitionComponent = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [skillResponse, setSkillResponse] = useState(''); // State to hold Alexa skill response

  const startRecognition = () => {
    // ... rest of your startRecognition code ...

    recognition.onresult = (event) => {
      const newTranscript = event.results[0][0].transcript;
      setTranscript(newTranscript);

      // Send voice input to Alexa skill with CORS and preflight handling
      const sendVoiceInputToSkill = async () => {
        try {
          const apiUrl = 'https://your-alexa-skill-lambda-url'; // Replace with your actual Lambda URL
          const data = { text: newTranscript };

          await axios.options(apiUrl); // Preflight request
          const response = await axios.post(apiUrl, data);

          // Handle successful response
          console.log('Voice input sent to Alexa skill and response received');
          setSkillResponse(response.data.alexaResponse); // Update state with skill response
        } catch (error) {
          console.error('Error sending voice input to Alexa skill:', error);
          // Handle errors (e.g., display an error message to the user)
        }
      };

      sendVoiceInputToSkill();
    };
  };

  // ... rest of your component code ...

  return (
    // ... rest of your JSX ...
    <div id="output-container" className="bg-light p-3">
      {transcript}
      {skillResponse && <p>Alexa Skill Response: {skillResponse}</p>}
    </div>
  );
};

export default SpeechRecognitionComponent;
