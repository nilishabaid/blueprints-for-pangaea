import React from 'react'
import './Flip.css'
import './fonts.css'

function Flip(props){
  return (
  <>
  <div class="flip-card" style={{ left: props.flipleft, top: props.fliptop, width: props.flipwidth, height: props.flipheight }}>
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h1 class="flip-card-header">{props.fheader}</h1>
        <img class="flip-card-image" src={props.flipurl} alt=""></img>
      </div>
      <div class="flip-card-back">
        <h1 class="flip-card-header">{props.bheader}</h1>
        <p class="flip-card-text">{props.btext}</p>
      </div>
    </div>
  </div>
  </>
  );
};

export default Flip;