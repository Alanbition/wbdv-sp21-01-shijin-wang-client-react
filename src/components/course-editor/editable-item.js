import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./editable-item-style.css";

const EditableItem = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        item={title: "Some Title", _id:"ABC"},
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active?'active':''} wbdv-tab-font `} to={to}>
                        {item.title}
                    </Link>
                    <span onClick={() => setEditing(true)} className="edit-icon fas fa-edit pull-right"></span>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCachedItem({
                                ...cachedItem,
                                title: e.target.value
                            })}
                        value={cachedItem.title}/>
                    <span onClick={() => {setEditing(false); updateItem(cachedItem);}} className="edit-icon pull-right fas fa-check"></span>
                    <span onClick={() => {setEditing(false); deleteItem(item); }} className="edit-icon pull-right fas fa-times"></span>
                </>
            }
        </>
    )
}

export default EditableItem