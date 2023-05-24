import React from "react";

const Item = ({ item, index , onClick, selected}) => {
  return (
    <div className="item" >
      <div className="title border-bottom" onClick={onClick}>
        <h2>{item.header}</h2>
        <span className="fs-3">{selected === index ? "-" : "+"}</span>
      </div>

      <div className={"content " +( (selected == index) ? "show" : "")}>
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default Item;
