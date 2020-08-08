import React from "react";

const Test = ({ person, personClicked }) => {
  return <div onClick={personClicked}>Hello {person}</div>
}

export default Test;