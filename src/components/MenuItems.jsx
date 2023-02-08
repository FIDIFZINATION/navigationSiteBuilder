import React, { createContext, useContext, useState } from 'react'
import { AllMenuItemsContext } from '../App'
import MenuItem from './MenuItem'

export const MenuItemsContext = createContext()
const MenuItems = () => {


    const {AllMenuItems, setAllMenuItems} = useContext(AllMenuItemsContext)
    // console.log("----------------------------------------------"+MenuItemsC)
    // const [MenuItems, setMenuItems] = useState([])
    const addMenuItem = () => {
        var title = prompt("Enter title for menu item:")
        var url = prompt("Enter url for " + title + ":")
        const obj = {
            id: new Date().getTime().toString(),
            Title: title,
            Url: url
        }

        if (obj.Title !== " " | obj.Url !== " ") {
            setAllMenuItems([...AllMenuItems, obj])
            console.log(MenuItems)
        }
    }


    return (
        <>
            <MenuItemsContext.Provider value={MenuItems}>
                <div>
                    Menu Items
                </div>
                <div>
                    <button onClick={addMenuItem}>Add New Item</button>
                </div>
                <div className='accordion'>
                    {/* <MenuItem MenuItemList={MenuItems} /> */}

                    {AllMenuItems.map((item, i) => {
                        return (
                            <div key={item.id}>
                                <MenuItem id={item.id} title={item.Title} url={item.Url} i={i} />
                            </div>

                        );
                    })}
                </div>
            </MenuItemsContext.Provider>
        </>
    )
}

export default MenuItems
