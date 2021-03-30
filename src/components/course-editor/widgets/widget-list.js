import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import WrapperWidgetType from "./widget-type";
import {useParams} from "react-router-dom"
import widgetService from "../../../services/widget-service";
import {connect} from "react-redux";
import "./widgets-style.css"

const WidgetList = (
    {
        myWidgets=[

        ],
        createWidget,
        findWidgetsForTopic,
        updateWidget,
        deleteWidget,
        clearWidgets
    }) => {


    const {moduleId, lessonId, topicId, widgetId} = useParams()


    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            console.log("Start To Load Widgets")
            findWidgetsForTopic(topicId)
        } else{
            console.log("Start To Clear Widget")
            clearWidgets()
        }
    }, [moduleId])

    useEffect(() => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            console.log("Start To Load Widgets")
            findWidgetsForTopic(topicId)
        } else{
            console.log("Start To Clear Widget")
            clearWidgets()
        }
    }, [lessonId])

    useEffect(() => {
        if(topicId !== "undefined" && typeof topicId !== "undefined") {
            console.log("Start To Load Widgets")
            findWidgetsForTopic(topicId)
        } else{
            console.log("Start To Clear Widget")
            clearWidgets()
        }
    }, [topicId])





    return(
        <div>
            <i onClick={() => createWidget(topicId)} className="widget-title fas fa-plus fa-2x float-right"></i>
            <h2 className={"widget-title"}>Widget List</h2>
            <ul className="list-group">
                {
                    myWidgets.map(_widget =>
                        <li key={_widget.id} className="widget-background list-group-item  list-group-item-action flex-column">
                            {
                                // (_widget.type === "HEADING" ||  _widget.type === "PARAGRAPH") &&
                                <WrapperWidgetType
                                    InnerUpdateWidget={updateWidget}
                                    InnerDeleteWidget={deleteWidget}
                                    InnerWidget={_widget}/>
                            }

                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        myWidgets: state.widgetReducer.widgets
    }
}
const dtpm = (dispatch) => {
    return {
        findWidgetsForTopic: (topicId) => {
            console.log("LOAD TOPICS FOR LESSON+++++++++:")
            console.log(topicId)
            widgetService.findWidgetsForTopic(topicId)
                .then(theWidgets => dispatch({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgets:theWidgets
                }))
        },
        createWidget: (topicId) => {
            console.log("CREATE Heading Widget: " + topicId)
            widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "Heading being edited"})
                .then(theActualWidget => dispatch({
                    type: "CREATE_WIDGET",
                    widget: theActualWidget
                }))
        },
        deleteWidget: (item) => {
            console.log("DELETE WIDGET: " + item.id + "Text: " + item.text)
            widgetService.deleteWidget(item.id)
                .then(status => dispatch({
                    type: "DELETE_WIDGET",
                    widgetToDelete: item
                }))
        },
        updateWidget: (widget) => {
            console.log("Update WIDGET: " + widget.id + "Text: " + widget.text + "Type: " + widget.type)
            widgetService.updateWidget(widget.id, widget)
                .then(status => dispatch({
                    type: "UPDATE_WIDGET",
                    widget
                }))
        },
        clearWidgets: () => {
            console.log("Clean Widget--------")
            return{
                emptyTopic: () => (dispatch({
                    type: "CLEAN_WIDGET",
                    widget: []
                }))
            }
        }
    }
}
export default connect(stpm, dtpm)(WidgetList)