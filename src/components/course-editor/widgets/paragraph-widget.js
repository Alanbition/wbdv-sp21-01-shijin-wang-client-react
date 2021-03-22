import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget,  editingX,  cachedWidgetX, setCachedWidgetX}) => {
    // const [editing, setEditing] = useState(false)
    // const [cachedWidget, setCachedWidget] = useState(widget)
    console.log("This is Widget: " + widget.type+ "id: " + widget.id)
    return (
        <>
            {
                !editingX &&
                <>
                {/*<i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>*/}
                <p>
                    {widget.text}
                </p></>
            }
            {
                editingX &&
                <>
                    {/*<>*/}
                    {/*    <i onClick={() => {setEditing(false); deleteItem(widget)}} className="fas fa-trash float-right"></i>*/}
                    {/*    <i onClick={() => {setEditing(false); updateItem(cachedWidget)}} className="fas fa-check float-right"></i>*/}
                    {/*</>*/}
                    {/*<select onChange={(e) => setCachedWidget(widget => ({...cachedWidget, type: e.target.value}))}  value={cachedWidget.type} className="form-control">*/}
                    {/*    <option value={"HEADING"}>Heading</option>*/}
                    {/*    <option value={"PARAGRAPH"}>Paragraph</option>*/}
                    {/*</select>*/}
                    <textarea
                        onChange={(e) => setCachedWidgetX({...cachedWidgetX, text: e.target.value})}
                        value={cachedWidgetX.text}
                        className="form-control"></textarea>
                </>
            }
        </>
    )
}

export default ParagraphWidget
