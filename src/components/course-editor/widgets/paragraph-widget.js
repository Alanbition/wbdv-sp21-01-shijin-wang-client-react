import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget,  deleteItem, updateItem}) => {
    const [editing, setEditing] = useState(false)
    const [cachedWidget, setCachedWidget] = useState(widget)
    console.log("This is Widget: " + widget.type+ "id: " + widget.id)
    return (
        <>

            {
                !editing &&
                <>
                <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                <p>
                    {widget.text}
                </p></>
            }
            {
                editing &&
                <>
                    <>
                        <i onClick={() => {setEditing(false); deleteItem(widget)}} className="fas fa-trash float-right"></i>
                        <i onClick={() => {setEditing(false); updateItem(cachedWidget)}} className="fas fa-check float-right"></i>
                    </>
                    <select onChange={(e) => setCachedWidget(widget => ({...cachedWidget, type: e.target.value}))}  value={cachedWidget.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                    </select>
                    <textarea
                        onChange={(e) => setCachedWidget({...cachedWidget, text: e.target.value})}
                        value={cachedWidget.text}
                        className="form-control"></textarea>
                </>
            }
        </>
    )
}

export default ParagraphWidget
