import React from "react";
import ExecBoard from './ExecBoard.js';
import Header from './Header.js';
import Footer from './Footer.js'

function ExecPage(props) {
  return (
    <div>
      <Header setCurrentPage={props.setCurrentPage}></Header>
      <ExecBoard></ExecBoard>
      <Footer></Footer>
    </div>
  );
}

export default ExecPage;