import React from "react";

const Figure = (props) => {
  return (
    <figure className={props.className}>
      <img src={props.image} alt={props.alt} className={props.className} />
    </figure>
  );
};

export default Figure;
