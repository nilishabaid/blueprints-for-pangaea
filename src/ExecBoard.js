import React from 'react';
import './ExecBoard.css';
import Popup from './Popup.js'

function ExecutiveRow(props) {
  return (
    <div className="executive-row">
      <div className="executive-member">
        <Popup url={props.img1} execname={props.name1} execpos={props.title1} execdes={props.des1}/>
        <h2>{props.name1}</h2>
        <p>{props.title1}</p>
      </div>
      <div className="executive-member">
        <Popup url={props.img2} execname={props.name2} execpos={props.title2} execdes={props.des2}/>
        <h2>{props.name2}</h2>
        <p>{props.title2}</p>
      </div>
      <div className="executive-member">
        <Popup url={props.img3} execname={props.name3} execpos={props.title3} execdes={props.des3}/>
        <h2>{props.name3}</h2>
        <p>{props.title3}</p>
      </div>
      <div className="executive-member">
        <Popup url={props.img4} execname={props.name4} execpos={props.title4} execdes={props.des4}/>
        <h2>{props.name4}</h2>
        <p>{props.title4}</p>
      </div>
    </div>
  );
}

function ExecutiveBoard() {
  return (
    <div className="execContainer">
      <div className="exec2Container">
        <h1>Meet Our Executive Team</h1>
        <div className="rowsContainer">
          <ExecutiveRow
            img1="LinkedIn.png"
            name1="John Doe"
            title1="CEO"
            des1="John Doe Description"
            img2="logo192.png"
            name2="James Ha"
            title2="Director"
            img3="logo192.png"
            name3="Bob Johnson"
            title3="CFO"
            img4="logo192.png"
            name4="Bob Johnson"
            title4="CFO"
          />
          <ExecutiveRow
            img1="logo192.png"
            name1="Tom Williams"
            title1="CTO"
            img2="logo192.png"
            name2="Sarah Brown"
            title2="CMO"
            img3="logo192.png"
            name3="Alex Lee"
            title3="CIO"
            img4="logo192.png"
            name4="Bob Johnson"
            title4="CFO"
          />
        </div>
      </div>
    </div>
  );
}

export default ExecutiveBoard;
