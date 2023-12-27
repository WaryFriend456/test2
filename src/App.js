import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import VoiceText from './components/VoiceText';
import TextInput from './components/TextInput';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import AlexaSkill from './components/AlexaSkill';
// import newcomponent from './components/newcomponent'

function App() {
  return (
    <>
      <Router>
        <Navbar title="VocalWheels" aboutText="About VocalWheels Team" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/voiceinput' element={<VoiceText />} />
          <Route path='/textinput' element={<TextInput heading="Send a command to your car" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// {/* <Route path='/textinput' element={<TextInput/>} /> */}
// {/* <AlexaSkill/> */}
// {/* <newcomponent/> */}
// {/* <Navbar title={3}/> */}
// {/* <Navbar/> */}