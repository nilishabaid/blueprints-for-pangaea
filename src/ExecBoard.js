import React from 'react';
import './ExecBoard.css';

function ExecutiveRow(props) {
  return (
    <div className="executive-row">
      <div className="executive-member">
        <img src={props.img1} alt="Executive" />
        <h2>{props.name1}</h2>
        <p>{props.title1}</p>
      </div>
      <div className="executive-member">
        <img src={props.img2} alt="Executive" />
        <h2>{props.name2}</h2>
        <p>{props.title2}</p>
      </div>
      <div className="executive-member">
        <img src={props.img3} alt="Executive" />
        <h2>{props.name3}</h2>
        <p>{props.title3}</p>
      </div>
    </div>
  );
}

function ExecutiveBoard() {
  return (
    <div>
      <h1>Meet Our Executive Team</h1>
      <ExecutiveRow
        img1="executive1.jpg"
        name1="John Doe"
        title1="CEO"
        img2="executive2.jpg"
        name2="Jane Smith"
        title2="COO"
        img3="executive3.jpg"
        name3="Bob Johnson"
        title3="CFO"
      />
      <ExecutiveRow
        img1="executive4.jpg"
        name1="Tom Williams"
        title1="CTO"
        img2="executive5.jpg"
        name2="Sarah Brown"
        title2="CMO"
        img3="executive6.jpg"
        name3="Alex Lee"
        title3="CIO"
      />
      <ExecutiveRow
        img1="executive4.jpg"
        name1="Tom Williams"
        title1="CTO"
        img2="executive5.jpg"
        name2="Sarah Brown"
        title2="CMO"
        img3="executive6.jpg"
        name3="Alex Lee"
        title3="CIO"
      />
      <ExecutiveRow
        img1="executive4.jpg"
        name1="Tom Williams"
        title1="CTO"
        img2="executive5.jpg"
        name2="Sarah Brown"
        title2="CMO"
        img3="executive6.jpg"
        name3="Alex Lee"
        title3="CIO"
      />
      <ExecutiveRow
        img1="executive1.jpg"
        name1="John Doe"
        title1="CEO"
        img2="executive2.jpg"
        name2="Jane Smith"
        title2="COO"
        img3="executive3.jpg"
        name3="Bob Johnson"
        title3="CFO"
      />
      <ExecutiveRow
        img1="executive4.jpg"
        name1="Tom Williams"
        title1="CTO"
        img2="executive5.jpg"
        name2="Sarah Brown"
        title2="CMO"
        img3="executive6.jpg"
        name3="Alex Lee"
        title3="CIO"
      />
      <ExecutiveRow
        img1="executive4.jpg"
        name1="Tom Williams"
        title1="CTO"
        img2="executive5.jpg"
        name2="Sarah Brown"
        title2="CMO"
        img3="executive6.jpg"
        name3="Alex Lee"
        title3="CIO"
      />
      <ExecutiveRow
        img1="executive4.jpg"
        name1="Tom Williams"
        title1="CTO"
        img2="executive5.jpg"
        name2="Sarah Brown"
        title2="CMO"
        img3="executive6.jpg"
        name3="Alex Lee"
        title3="CIO"
      />
      <ExecutiveRow
        img1="executive1.jpg"
        name1="John Doe"
        title1="CEO"
        img2="executive2.jpg"
        name2="Jane Smith"
        title2="COO"
        img3="executive3.jpg"
        name3="Bob Johnson"
        title3="CFO"
      />
      <ExecutiveRow
        img1="executive4.jpg"
        name1="Tom Williams"
        title1="CTO"
        img2="executive5.jpg"
        name2="Sarah Brown"
        title2="CMO"
        img3="executive6.jpg"
        name3="Alex Lee"
        title3="CIO"
      />
      <ExecutiveRow
        img1="executive4.jpg"
        name1="Tom Williams"
        title1="CTO"
        img2="executive5.jpg"
        name2="Sarah Brown"
        title2="CMO"
        img3="executive6.jpg"
        name3="Alex Lee"
        title3="CIO"
      />
      <ExecutiveRow
        img1="executive4.jpg"
        name1="Tom Williams"
        title1="CTO"
        img2="executive5.jpg"
        name2="Sarah Brown"
        title2="CMO"
        img3="executive6.jpg"
        name3="Alex Lee"
        title3="CIO"
      />
      <ExecutiveRow
        img1="executive1.jpg"
        name1="John Doe"
        title1="CEO"
        img2="executive2.jpg"
        name2="Jane Smith"
        title2="COO"
        img3="executive3.jpg"
        name3="Bob Johnson"
        title3="CFO"
      />
      <ExecutiveRow
        img1="executive4.jpg"
        name1="Tom Williams"
        title1="CTO"
        img2="executive5.jpg"
        name2="Sarah Brown"
        title2="CMO"
        img3="executive6.jpg"
        name3="Alex Lee"
        title3="CIO"
      />
      <ExecutiveRow
        img1="executive4.jpg"
        name1="Tom Williams"
        title1="CTO"
        img2="executive5.jpg"
        name2="Sarah Brown"
        title2="CMO"
        img3="executive6.jpg"
        name3="Alex Lee"
        title3="CIO"
      />
      <ExecutiveRow
        img2="executive5.jpg"
        name2="Sarah Brown"
        title2="CMO"
      />
    </div>
  );
}

export default ExecutiveBoard;
