import React from 'react'

const ListWidget = ({widget, editingX, cachedWidgetX, setCachedWidgetX}) => {
    return (
        <div>
            {
                !editingX &&
                <>
                    {
                        widget.listOrdered &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.listOrdered &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
            {
                editingX &&
                <div>
                    <input onChange={(e) => setCachedWidgetX({...cachedWidgetX, listOrdered: e.target.checked})}  checked={cachedWidgetX.listOrdered} type="checkbox"/> Ordered
                    <br/>
                    List Items
                    <textarea rows={10}  onChange={(e) => setCachedWidgetX({...cachedWidgetX, text: e.target.value})} value={cachedWidgetX.text} className="form-control">

                    </textarea>
                </div>
            }
            {/*<textarea></textarea>*/}
        </div>
    )
}

export default ListWidget