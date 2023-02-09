import React, { useState, useContext, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import { AllMenuItemsContext } from '../App'
import MenuItem from './MenuItem'

const NewMenuEditor = () => {
    const [newMenuItem, setNewMenuItem] = useState([])

    const{AllMenuItems, setAllMenuItems} = useContext(AllMenuItemsContext)

    const onDropItem = (id) => {
        const menuItem = AllMenuItems.find((item) => {
            return item.id == id
        })

        setNewMenuItem([...newMenuItem,menuItem])

        console.log(newMenuItem)
        console.log(id)
        console.log(menuItem)
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
                {/* {newMenuItem.map((item, i) => {
                    console.log('reaching')
                    return (
                        <div key={item.id}>
                            <MenuItem id={item.id} title={item.Title} url={item.Url} i={i} />
                        </div>

                    );
                })} */}
            </div>
        </>
    )
}

export default NewMenuEditor
