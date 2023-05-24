import React, { useEffect, useState } from "react";
import Item from "./Item";

const List = ({ items, index, selectedList, activarList }) => {
  const [selected, setSelect] = useState(null);

  const toggle = (index) => {
    setSelect(index === selected ? null : index);
    activarList();
  };

  useEffect(() => {
    if (index != selectedList) {
        setSelect(null);
    }
  }, [selectedList]);

  return (
    <div>
      {items.map((item, index) => (
        <Item
          key={index}
          index={index}
          item={item}
          onClick={() => toggle(index)}
          selected={selected}
        />
      ))}
    </div>
  );
};

export default List;
