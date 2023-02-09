import React, { useContext, useEffect, useState } from "react";
import { AllMenuContext } from "../App";
import { MenuItem } from "./MenuItem";

export const MenuItems = () => {
  const { AllMenuItems, setAllMenuItems } = useContext(AllMenuContext);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  var menuObject = {};
  const addItem = () => {
    if (title === "" || url === "") {
      alert("Please enter title or url !!");
      return;
    }
    menuObject = {
      id: new Date().getTime().toString(),
      title: title,
      url: url,
    };
    setAllMenuItems([...AllMenuItems, menuObject]);
    console.log(AllMenuItems);

    setTitle('');
    setUrl('');
  };
  useEffect(() => {
  }, []);

  return (
    <div>
      <div>
        <div>
          <label htmlFor="">Title :</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Url : .</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={addItem} className="mx-2">
            Add
          </button>
        </div>
      </div>

      <div className="accordion">
        {AllMenuItems.map((item, i) => {
          return (
            <div key={item.id}>
              <MenuItem id={item.id} title={item.title} url={item.url} i={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
