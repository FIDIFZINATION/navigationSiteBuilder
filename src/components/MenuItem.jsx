import React from 'react'
import { useDrag } from 'react-dnd'

const MenuItem = ({ id, title, url, i }) => {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "menuItem",
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
    }));
    return (
        <>
            <div className="accordion-item" ref={dragRef} key={id}>

                <h5 className="accordion-header">

                    <div className='d-flex jsb aic'>

                        <span>{title}</span> {/* //Title for the item */}

                        <div className='d-flex aic '>
                            <div className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + i} aria-expanded="false" aria-controls="collapseOne">
                                <i className='fa fa-edit mx-2'></i>
                            </div>
                            <i className="fa fa-trash mx-2"></i>
                        </div>
                    </div>

                </h5>
                <div id={"collapse" + i} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body d-flex">
                        <div>
                            <label htmlFor="">Title : </label>
                            <input type="text" value={title} name="" id="" readOnly/>
                        </div>
                        <div className='mx-2'></div>
                        <div>
                            <label htmlFor="">Url : </label>
                            <input type="text" value={url} name="" id="" readOnly/>
                        </div>
                        <button>Done</button>
                    </div>
                </div>
            </div>

            {/* {
                MenuItemList.map((item, i) => {
                    return (
                        
                    )

                })
            } */}

        </>
    )
}

export default MenuItem
