import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../../services/lesson-service'

const LessonTabs = (
    {
        lessons=[
            // {_id: "123", title: "Lesson A"},
            // {_id: "123", title: "Lesson B"},
            // {_id: "123", title: "Lesson C"}
        ],
        findLessonsForModule,
        createLesson
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return(
        <div>
            <h2>Lessons</h2>
            <ul className="nav nav-pills">
                {
                    lessons.map(lesson =>
                        <li className="nav-item">
                            <EditableItem
                                active={lesson._id === lessonId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                item={lesson}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createLesson(moduleId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        console.log("LOAD LESSONS FOR MODULE:")
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons
            }))
    },
    createLesson: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE: " + moduleId)
        lessonService
            .createLesson(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    }
})

export default connect(stpm, dtpm)(LessonTabs)