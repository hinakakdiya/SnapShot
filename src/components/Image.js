import React from "react"

const Image = ({ url }) => {
  return (
    <>
        <li>
          <img src={url} alt=""/>
        </li>
    </>
  );
};

export default Image
