import React from "react";
import ExecBoard from './ExecBoard.js';
import Header from './Header.js';

function ExecPage(props) {
  return (
    <div>
      <Header setCurrentPage={props.setCurrentPage}></Header>
      <ExecBoard></ExecBoard>
    </div>
  );
}

export default ExecPage;