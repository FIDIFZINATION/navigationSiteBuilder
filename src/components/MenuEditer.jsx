import React, { useState, useContext, useEffect } from "react";
import { useDrop } from "react-dnd";
import { AllMenuContext } from "../App";
import { SelectedMenuItem } from "./SelectedMenuItem";

export const MenuEditer = () => {
  const { AllMenuItems, setAllMenuItems } = useContext(AllMenuContext);
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);

  var newItems = [];

  const onDropItem = (id) => {
    console.log(id);

    const menuItem = AllMenuItems.find((item) => {
      return item.id == id;
    });

    if (menuItem == undefined) {
      return;
    }

    newItems.push(menuItem);
    localStorage.setItem("SelectedItemsList", JSON.stringify(newItems));
    // console.log("New Items List: ", newItems);
    // console.log("Menu Item Got : ", menuItem);
  };

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "menuItem",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item) => onDropItem(item.id),
  }));

  useEffect(() => {
    var dataFromLocalstorage = localStorage.getItem("SelectedItemsList");
    setSelectedMenuItems(JSON.parse(dataFromLocalstorage));
    console.log('SELECTEDlIST', selectedMenuItems);
  }, [localStorage.getItem("SelectedItemsList").length]);

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
