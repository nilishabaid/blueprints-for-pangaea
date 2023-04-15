import React from "react";
import './SecondaryButton.css'

const SecondaryButton = ({text}) => {
  return (
    <button class="secondaryButton">
      {text}
    </button>
  );
};

export default SecondaryButton;
