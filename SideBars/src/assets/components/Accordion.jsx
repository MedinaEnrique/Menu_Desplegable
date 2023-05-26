import React, {useState } from "react";
import List from "./List";
import img1 from "./imagenesLabel/img1.jpeg"
import img2 from "./imagenesLabel/img2.jpeg"
import img3 from "./imagenesLabel/img3.jpeg"
const Accordion = () => {
  const DataAccor = [
    {
      header: "LABEL",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, ",
        imagen:img1,
    },
    {
      header: "LABEL",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, assumenda quo tempora ducimus a impedit eum laboriosam? Sit autem ipsum earum molestiae,",
        imagen:img2,
    },
    {
      header: "LABEL",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, assumenda quo tempora ducimus a impedit eum laboriosam? Sit autem ipsum earum molestiae",
        imagen:img3,
    },
  ];
    const [selectedList, setSelectList] = useState(null);
    const activarList = (index) => {
      setSelectList(index);
    }
  return (
    <div className="container mt-5">
      <div className="row row-cols-2">
        
          <List
            items={DataAccor}
          />
        
      </div>
    </div>
  );
};
export default Accordion
