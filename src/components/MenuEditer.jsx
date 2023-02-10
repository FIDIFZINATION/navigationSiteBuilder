import React, { useState, useContext, useEffect } from "react";
import { useDrop } from "react-dnd";
import { AllMenuContext } from "../App";
import { SelectedMenuItem } from "./SelectedMenuItem";

export const MenuEditer = () => {
  const { AllMenuItems, setAllMenuItems } = useContext(AllMenuContext);
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);


  const onDropItem = (id) => {
    console.log(id);

    const menuItem = AllMenuItems.find((item) => {
      return item.id == id;
    });

    if (menuItem == undefined) {
      return;
    }

    setSelectedMenuItems([...selectedMenuItems,menuItem])
  };

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "menuItem",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item) => onDropItem(item.id),
  }),[AllMenuItems, selectedMenuItems]);


  return (
    <>
      <div className="drop-area" ref={dropRef}>
        {selectedMenuItems.map((item, i) => {
          if(item.title == null){
            return;
          }
          return (
            <div key={i}>
              <SelectedMenuItem
                id={item.id}
                title={item.title}
                url={item.url}
                i={i}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
