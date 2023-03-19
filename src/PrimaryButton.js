import React from "react";

const PrimaryButton = ({text}) => {
  return (
    <button
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "18px 36px",
        gap: "10px",
        position: "absolute",
        width: "253px",
        height: "70px",
        left: "1px",
        top: "99px",
        background: "#0568FD",
        borderRadius: "3px",
        fontFamily: "General Sans, sans-serif",
        fontWeight: "600",
        fontSize: "16px",
        color: "#FFFFFF",
        border: "none",
        margin: "auto",
        textAlign: "center"
      }}
    //   onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
