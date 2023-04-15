import React from "react";
import './PrimaryButton.css'

const PrimaryButton = ({text}) => {
  return (
    <button class = "primaryButton"
    //   onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;