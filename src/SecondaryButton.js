import React from "react";

const Button = ({text}) => {
  return (
    <button
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "14px 54px",
        gap: "10px",
        position: "absolute",
        width: "281px",
        height: "55px",
        left: "303px",
        top: "93px",
        background: "#FFFFFF",
        border: "1px solid #000000",
        borderRadius: "3px",
        fontFamily: "General Sans, sans-serif",
        fontWeight: "600",
        fontSize: "16px",
        color: "#000000",
        textAlign: "center"
      }}
    >
      {text}
    </button>
  );
};

export default Button;
