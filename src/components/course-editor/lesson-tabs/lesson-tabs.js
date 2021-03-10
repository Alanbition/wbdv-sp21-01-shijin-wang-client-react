import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../../services/lesson-service'
import moduleService from "../../../services/module-service";
import "./lesson-tabs-style.css";

const LessonTabs = (
    {
        myLessons=[
            // {_id: "123", title: "Lesson A"},
            // {_id: "123", title: "Lesson B"},
            // {_id: "123", title: "Lesson C"}
        ],
        findLessonsForModule=(lessonId) => console.log(lessonId),
        createLesson,
        updateLesson,
        deleteLesson

    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        console.log("findLessonsForModule- moduleId" + moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined" &&
            courseId !== "undefined" && typeof courseId !== "undefined") {
            findLessonsForModule(moduleId)
        }else{

        }

    }, [courseId, moduleId])

    return(
        <div>
            <h2 className={"lesson-tab-title"}>Lessons</h2>
            <ul className="nav nav-tabs">
                {
                    myLessons.map(lesson =>
                        <li className={`wbdv-tab-background d-flex justify-content-between align-items-center nav-item ${lesson._id === lessonId ? 'active' : ''}`} >
                            <EditableItem
                                // active={lesson._id === lessonId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                active={true}
                                item={lesson}/>
                        </li>
                    )
                }
                <li className="lesson-plus" align="center">
                    <i onClick={() => createLesson(moduleId)} className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        myLessons: state.lessonReducer.lessons
    }
}
const dtpm = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) => {
            console.log("LOAD LESSONS FOR MODULE++++++++:")
            console.log(moduleId)
            lessonService.findLessonsForModule(moduleId)
                .then(theLessons => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    lessons: theLessons
                }))
        },
        createLesson: (moduleId) => {
            console.log("CREATE LESSON FOR MODULE++++++++: " + moduleId)
            lessonService
                .createLesson(moduleId, {title: "New Lesson"})
                .then(theActualLesson => dispatch({
                    type: "CREATE_LESSON",
                    lesson: theActualLesson
                }))
        },
        deleteLesson: (item) => {
            lessonService.deleteLesson(item._id)
                .then(status => dispatch({
                    type: "DELETE_LESSON",
                    lessonToDelete: item
                }))
        },
        updateLesson: (lesson) => {
            lessonService.updateLesson(lesson._id, lesson)
                .then(status => dispatch({
                    type: "UPDATE_LESSON",
                    lesson
                }))
        }
    }
}

export default connect(stpm, dtpm)(LessonTabs)