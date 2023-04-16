import React from "react";
import './SecondaryButton.css'

function SecondaryButton(props){
  return (
    <button class="secondaryButton" style={props.givenstyle}>
      {props.text}
    </button>
  );
};

export default SecondaryButton;
