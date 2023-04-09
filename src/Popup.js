import React, { useState } from 'react';
import './Popup.css'

function Popup(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>  
      <button onClick={() => setIsOpen(true)} className="openButton">
        <img src={props.url} alt='executive' className="openButtonImg"/>
      </button>

      {isOpen && (
        <div className="popupOverlay">
          <div className="popupOpen">
            <button onClick={() => setIsOpen(false)} className="closeButton">X</button> 
            <img className="popupImage" src={props.url} alt="executive" />
            <div className="popupText">
              <div>
                <h1 className="popupName">{props.execname}</h1>
              </div>
              <p className="popupTitle" style={{ textAlign: "left"}}>{props.execpos}</p>
              <p className="popupDes" style={{ textAlign: "left"}}>{props.execdes}</p>
            </div>
          </div>
        </div>
      )}
    </div>  
  );
}

export default Popup;


