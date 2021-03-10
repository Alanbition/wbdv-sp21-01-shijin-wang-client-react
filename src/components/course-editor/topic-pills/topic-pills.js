import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../../services/lesson-service'
import moduleService from "../../../services/module-service";
import topicService from "../../../services/topic-service"
import "./topic-pills-style.css";

const TopicPills = (
    {
        myTopics=[
            // {_id: "123", title: "t A"},
            // {_id: "123", title: "t A B"},
            // {_id: "123", title: "t C"}
        ],
        findTopicsForLesson,
        createTopic,
        updateTopic,
        deleteTopic,
        clearTopics

    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();


    // const clearTopics=(state) =>{
    //     console.log("Clear Topic")
    //     return{
    //         topics:[]
    //      }
    // }
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            console.log("Start To Load Topic")
            findTopicsForLesson(lessonId)
        } else{
            console.log("Start To Clear Topic")
            clearTopics()
        }
    }, [moduleId])

    useEffect(() => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            console.log("Start To Load Topic")
            findTopicsForLesson(lessonId)
        } else{
            console.log("Start To Clear Topic")
            clearTopics()
        }
    }, [lessonId])
    return(
        <div>
            <h2 className={"topic-pills-title"}>Topics</h2>
            <ul className="nav nav-pills">
                {
                    myTopics.map(topic =>
                        <li className={`wbdv-tab-font d-flex justify-content-between align-items-center nav-item nav-item ${topic._id === topicId ? 'active' : ''}`}>
                            <EditableItem
                                // active={topic._id === topicId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                active={true}
                                item={topic}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopic(lessonId)} className="topic-plus fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        myTopics: state.topicReducer.topics
    }
}
const dtpm = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) => {
            console.log("LOAD TOPICS FOR LESSON+++++++++:")
            console.log(lessonId)
            topicService.findTopicsForLesson(lessonId)
                .then(theTopics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics:theTopics
                }))
        },
        createTopic: (lessonId) => {
            console.log("CREATE TOPIC FOR LESSON++++++++: " + lessonId)
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then(theActualTopic => dispatch({
                    type: "CREATE_TOPIC",
                    topic: theActualTopic
                }))
        },
        deleteTopic: (item) => {
            topicService.deleteTopic(item._id)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicToDelete: item
                }))
        },
        updateTopic: (topic) => {
            topicService.updateTopic(topic._id, topic)
                .then(status => dispatch({
                    type: "UPDATE_TOPIC",
                    topic
                }))
        },
        clearTopics: () => {
            console.log("Clean TOPIC--------")
            return{
                emptyTopic: () => (dispatch({
                    type: "CLEAN_TOPIC",
                    topic: []
                }))
            }
        }
    }
}

export default connect(stpm, dtpm)(TopicPills)