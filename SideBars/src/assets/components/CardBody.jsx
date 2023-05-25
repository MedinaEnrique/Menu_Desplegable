import React from "react";
import Buttons from "./Buttons";
import Fecha from "./Date";
import Links from "./Links";

const CardBody = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">It's Closing Time</h5>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit nam,
        ut sint reprehenderit dignissimos tenetur suscipit explicabo animi vero
        voluptates, accusamus alias ex soluta quis, esse ratione beatae rem.
      </p>
      <Buttons />
      <Fecha />
      <Links />
    </div>
  );
};

export default CardBody;
