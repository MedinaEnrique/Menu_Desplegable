import React from "react";

const Item = ({ item, index , onClick, selected}) => {

  const show = (selected == index) ? " show " : ""
  const flex = (item.imagen ?' d-flex ': '')
  const additionalClass=show + flex;

  return (
    <div className="item" >
      <div className="title border-bottom" onClick={onClick}>
        <h2>{item.header}</h2>
        <span className="fs-3">{selected === index ? "-" : "+"}</span>
      </div>

      <div className={"content " + show }>

       <div className={flex}>
         <p>{item.content}</p>
         {item.imagen && (<img src={item.imagen} width={100}></img>)}
       </div>

      </div>
     

    </div>
  );
};

export default Item;
