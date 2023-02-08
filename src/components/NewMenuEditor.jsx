import React, { useState, useContext } from 'react'
import { useDrop } from 'react-dnd'
import { AllMenuItemsContext } from '../App'

const NewMenuEditor = () => {

    const {AllMenuItems, setAllMenuItems} = useContext(AllMenuItemsContext)
    const [newMenuItems, setNewmenuItems] = useState([])

    const onDropItem = (id) => {
        const menuItem = AllMenuItems.filter((item) => {
            return item.id == id
        })

        setNewmenuItems([...newMenuItems, menuItem])
        console.log(newMenuItems)
        console.log(menuItem)


        console.log(id);
    }

    const [{ isOver }, dropref] = useDrop(() => ({
        accept: "menuItem",
        drop: (item) => onDropItem(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })

    }))
    return (
        <>
            <div>Menu Editor</div>
            <div style={{ width: '100%', height: '100%' }} ref={dropref}>

            </div>
        </>
    )
}

export default NewMenuEditor
