import { createContext, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { MenuItems } from "./components/MenuItems";
import { MenuEditer } from "./components/MenuEditer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const AllMenuContext = createContext();

function App() {
  const [AllMenuItems, setAllMenuItems] = useState([]);
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <AllMenuContext.Provider value={{ AllMenuItems, setAllMenuItems, selectedMenuItems, setSelectedMenuItems }}>
          <div className="container main-screen">
            <div className="sections">
              <MenuItems />
            </div>
            <div style={{ width: "100px" }}></div>
            <div className="sections">
              <MenuEditer />
            </div>
          </div>
        </AllMenuContext.Provider>
      </DndProvider>
    </>
  );
}

export default App;
