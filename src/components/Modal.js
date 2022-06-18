import React, { useCallback, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './modal.css';
import { MdClose } from 'react-icons/md';
import img from '../img/camera.jpg';

const Modal = ({ showmodal, setShowmodal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowmodal(false);
    }
  };
  const keypress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showmodal) {
        setShowmodal(false);
      }
    },
    [setShowmodal, showmodal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keypress);
    return () => document.removeEventListener('keydown', keypress);
  }, [keypress]);
  return (
    <>
      {showmodal ? (
        <div ref={modalRef} className="background" onClick={closeModal}>
          <div showmodal={showmodal} className="modalwrap">
            <img src={img} alt="modalimg" className="modalimg" />
            <div className="modalcont">
              <h1>Are you ready </h1>
              <p>Get Exclusive access to our next launch</p>
              <button>Join now</button>
            </div>
            <MdClose
              className="closemodalbtn"
              aria-label="Close modal"
              onClick={() => setShowmodal((prev) => !prev)}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
