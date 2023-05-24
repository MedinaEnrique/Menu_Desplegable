import React, { useEffect, useState } from "react";
import List from "./List";

const Container = () => {
  const data1 = [
    {
      header: "HoldBack",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, assumenda quo tempora ducimus a impedit eum laboriosam? Sit autem ipsum earum molestiae, reiciendis consequuntur et dolorem totam laboriosam doloremque ab?",
    },
    {
      header: "Financial Assurance",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, assumenda quo tempora ducimus a impedit eum laboriosam? Sit autem ipsum earum molestiae, reiciendis consequuntur et dolorem totam laboriosam doloremque ab?",
    },
    {
      header: "Insurance Plans",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, assumenda quo tempora ducimus a impedit eum laboriosam? Sit autem ipsum earum molestiae, reiciendis consequuntur et dolorem totam laboriosam doloremque ab?",
    },
    {
      header: "ARO creditor",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, assumenda quo tempora ducimus a impedit eum laboriosam? Sit autem ipsum earum molestiae, reiciendis consequuntur et dolorem totam laboriosam doloremque ab?",
    },
  ];
  const data2 = [
    {
      header: "Join and Several Liability",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, assumenda quo tempora ducimus a impedit eum laboriosam? Sit autem ipsum earum molestiae, reiciendis consequuntur et dolorem totam laboriosam doloremque ab?",
    },
    {
      header: "Colorado",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, assumenda quo tempora ducimus a impedit eum laboriosam? Sit autem ipsum earum molestiae, reiciendis consequuntur et dolorem totam laboriosam doloremque ab?",
    },
    {
      header: "Joint an several",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, assumenda quo tempora ducimus a impedit eum laboriosam? Sit autem ipsum earum molestiae, reiciendis consequuntur et dolorem totam laboriosam doloremque ab?",
    },
    {
      header: "Aro Moral Hazard",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, assumenda quo tempora ducimus a impedit eum laboriosam? Sit autem ipsum earum molestiae, reiciendis consequuntur et dolorem totam laboriosam doloremque ab?",
    },
  ];

  const data = [data1, data2];

  const [selectedList, setSelectList] = useState(null);

  const activarList = (index) => {
    setSelectList(index);
};

  return (
    <div className="container mt-5">
      <div className="row row-cols-2">
        {data.map((items, index) => (
          <List key={index} items={items} index={index} selectedList={selectedList} activarList={() => activarList(index)}/>
        ))}
      </div>
    </div>
  );
};

export default Container;
