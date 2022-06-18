import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [showmodal, setShowmodal] = useState(false);
  const openmodal = () => {
    setShowmodal((prev) => !prev);
  };
  return (
    <>
      <div className="container">
        <button onClick={openmodal} className="button">
          I'm a modal
        </button>
        <Modal showmodal={showmodal} setShowmodal={setShowmodal} />
      </div>
    </>
  );
}

export default App;
