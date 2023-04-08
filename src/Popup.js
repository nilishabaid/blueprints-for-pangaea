import React, { useState } from 'react';
import './Popup.css'

function Popup(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>  
      <div>
        <button onClick={() => setIsOpen(true)}>
          <img src={props.url} alt='executive'/>
        </button>

        {isOpen && (
          <div>
            <div>
              <h1>{props.execname}</h1>
              <p>{props.execdes}</p>   
            </div>
            <button onClick={() => setIsOpen(false)}>
              Close Pop-up
            </button>
          </div>
        )}
      </div>
    </div>  
  );
}

export default Popup;


