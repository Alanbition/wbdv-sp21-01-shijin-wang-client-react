import React, {useState} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ImageWidget from "./image-widget";
import ListWidget from "./list-widget";

const WrapperWidgetType = ({InnerWidget, InnerUpdateWidget, InnerDeleteWidget}) => {
    console.log("Widget Wrapper: Text: " + InnerWidget.text + " Type "+  InnerWidget.type)
    const [WidgetType, setWidgetType] = useState(InnerWidget.type)
    const [cachedWidget, setCachedWidget] = useState(InnerWidget)
    const [editing, setEditing] = useState(false)
    return (
        <>
            {
                (WidgetType === "HEADING") && editing && InnerWidget != null &&
                <>
                    <>
                        <i onClick={() => {setEditing(false); InnerDeleteWidget(InnerWidget)}} className="fas fa-trash float-right"></i>
                        <i onClick={() => {setEditing(false); InnerUpdateWidget(cachedWidget)}} className="fas fa-check float-right"></i>
                    </>
                    <select onChange={(e) => {setCachedWidget(widget => ({...cachedWidget, type: e.target.value})); setWidgetType(e.target.value)}}  value={cachedWidget.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LIST"}>List</option>
                    </select>
                    <HeadingWidget
                        // updateItem={InnerUpdateWidget}
                        // deleteItem={InnerDeleteWidget}
                        widget={InnerWidget}
                        editingX={editing}
                        cachedWidgetX={cachedWidget}
                        setCachedWidgetX = {setCachedWidget}
                    />
                </>
            }
            {
                (WidgetType === "HEADING") && !editing &&
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                    <HeadingWidget
                        // updateItem={InnerUpdateWidget}
                        // deleteItem={InnerDeleteWidget}
                        widget={InnerWidget}
                        editingX={editing}
                        cachedWidgetX={cachedWidget}
                        setCachedWidgetX = {setCachedWidget}
                    />
                </>
            }
            {
                (WidgetType === "PARAGRAPH") && editing && InnerWidget != null &&
                <>
                    <>
                        <i onClick={() => {setEditing(false); InnerDeleteWidget(InnerWidget)}} className="fas fa-trash float-right"></i>
                        <i onClick={() => {setEditing(false); InnerUpdateWidget(cachedWidget)}} className="fas fa-check float-right"></i>
                    </>
                    <select onChange={(e) => {setCachedWidget(widget => ({...cachedWidget, type: e.target.value})); setWidgetType(e.target.value)}}  value={cachedWidget.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LIST"}>List</option>
                    </select>
                    <ParagraphWidget
                        // updateItem={InnerUpdateWidget}
                        // deleteItem={InnerDeleteWidget}
                        widget={InnerWidget}
                        editingX={editing}
                        cachedWidgetX={cachedWidget}
                        setCachedWidgetX = {setCachedWidget}
                    />
                </>
            }
            {
                (WidgetType === "PARAGRAPH") && !editing &&
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                    <ParagraphWidget
                        // updateItem={InnerUpdateWidget}
                        // deleteItem={InnerDeleteWidget}
                        widget={InnerWidget}
                        editingX={editing}
                        cachedWidgetX={cachedWidget}
                        setCachedWidgetX = {setCachedWidget}
                    />
                </>
            }
            {
                (WidgetType === "IMAGE") && editing && InnerWidget != null &&
                <>
                    <>
                        <i onClick={() => {setEditing(false); InnerDeleteWidget(InnerWidget)}} className="fas fa-trash float-right"></i>
                        <i onClick={() => {setEditing(false); InnerUpdateWidget(cachedWidget)}} className="fas fa-check float-right"></i>
                    </>
                    <select onChange={(e) => {setCachedWidget(widget => ({...cachedWidget, type: e.target.value})); setWidgetType(e.target.value)}}  value={cachedWidget.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LIST"}>List</option>
                    </select>
                    <ImageWidget
                        widget={InnerWidget}
                        editingX={editing}
                        cachedWidgetX={cachedWidget}
                        setCachedWidgetX = {setCachedWidget}
                    />
                </>
            }
            {
                (WidgetType === "IMAGE") && !editing &&
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                    <ImageWidget
                        widget={InnerWidget}
                        editingX={editing}
                        cachedWidgetX={cachedWidget}
                        setCachedWidgetX = {setCachedWidget}
                    />
                </>
            }
            {
                (WidgetType === "LIST") && editing && InnerWidget != null &&
                <>
                    <>
                        <i onClick={() => {setEditing(false); InnerDeleteWidget(InnerWidget)}} className="fas fa-trash float-right"></i>
                        <i onClick={() => {setEditing(false); InnerUpdateWidget(cachedWidget)}} className="fas fa-check float-right"></i>
                    </>
                    <select onChange={(e) => {setCachedWidget(widget => ({...cachedWidget, type: e.target.value})); setWidgetType(e.target.value)}}  value={cachedWidget.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LIST"}>List</option>
                    </select>
                    <ListWidget
                        widget={InnerWidget}
                        editingX={editing}
                        cachedWidgetX={cachedWidget}
                        setCachedWidgetX = {setCachedWidget}
                    />
                </>
            }
            {
                (WidgetType === "LIST") && !editing &&
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                    <ListWidget
                        widget={InnerWidget}
                        editingX={editing}
                        cachedWidgetX={cachedWidget}
                        setCachedWidgetX = {setCachedWidget}
                    />
                </>
            }
        </>
    )

}


export default WrapperWidgetType