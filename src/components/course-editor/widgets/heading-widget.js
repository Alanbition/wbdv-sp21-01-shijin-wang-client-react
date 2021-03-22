
import React, {useState} from 'react'

const HeadingWidget = ({widget, editingX, cachedWidgetX, setCachedWidgetX}) => {
    const [editing, setEditing] = useState(false)
    // const [cachedWidget, setCachedWidget] = useState(widget)
    console.log("This is Heading: " + widget.type+ "id: " + widget.id)
    return (
        <>
        {
            !editingX &&
            <>
                {/*<i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>*/}
                {widget.size === 1 && <h1>{widget.text}</h1>}
                {widget.size === 2 && <h2>{widget.text}</h2>}
                {widget.size === 3 && <h3>{widget.text}</h3>}
                {widget.size === 4 && <h4>{widget.text}</h4>}
                {widget.size === 5 && <h5>{widget.text}</h5>}
                {widget.size === 6 && <h6>{widget.text}</h6>}
            </>
        }
        {
            editingX &&
            <div>
                {/*<>*/}
                {/*    <i onClick={() => {setEditing(false); deleteItem(widget)}} className="fas fa-trash float-right"></i>*/}
                {/*    <i onClick={() => {setEditing(false); updateItem(cachedWidget)}} className="fas fa-check float-right"></i>*/}
                {/*</>*/}
                {/*<select onChange={(e) => setCachedWidget(widget => ({...cachedWidget, type: e.target.value}))}  value={cachedWidget.type} className="form-control">*/}
                {/*    <option value={"HEADING"}>Heading</option>*/}
                {/*    <option value={"PARAGRAPH"}>Paragraph</option>*/}
                {/*</select>*/}
                <input onChange={(e) => setCachedWidgetX(widget => ({...cachedWidgetX, text: e.target.value}))} value={cachedWidgetX.text} className="form-control"/>
                <select onChange={(e) => setCachedWidgetX(widget => ({...cachedWidgetX, size: parseInt(e.target.value)}))} value={cachedWidgetX.size} className="form-control">
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
            </div>
        }
        </>
        )

}



export default HeadingWidget