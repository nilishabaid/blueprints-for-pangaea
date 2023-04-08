import React from "react";

function NewPage(props) {
  const handleClick = () => {
    props.setCurrentPage("home");
  };

  return (
    <div>
      <h1>New Page</h1>
      <p>Welcome to the new page!</p>
      <button onClick={handleClick}>Go to Home Page</button>
    </div>
  );
}

export default NewPage;