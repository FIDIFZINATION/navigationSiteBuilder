import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MenuItems from './components/MenuItems'
import NewMenuEditor from './components/NewMenuEditor'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd'

export const AllMenuItemsContext = createContext();

function App() {  
  const [AllMenuItems, setAllMenuItems] = useState([])
  

  return (
    <>
      <DndProvider backend={HTML5Backend}>

        <AllMenuItemsContext.Provider value={{ AllMenuItems, setAllMenuItems }}>
          <div className="main-section d-flex row">

            <div className="sections"> <MenuItems /> </div>
            <div className="sections"> <NewMenuEditor /> </div>

          </div>
        </AllMenuItemsContext.Provider>
      </DndProvider>
    </>
  )
}

export default App
