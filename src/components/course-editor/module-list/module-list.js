import React, {useEffect} from 'react'
import {connect, Provider} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../../services/module-service"
import lessonService from "../../../services/lesson-service"
import topicService from "../../../services/topic-service"
import "./module-list-style.css"

const ModuleList = (
    {
        myModules=[],
        createModule=() => alert("Create Module 234"),
        deleteModule=(item) => alert("delete " + item._id),
        updateModule,
        findModulesForCourse=(courseId) => console.log(courseId)
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        // alert(courseId)
        console.log("LOAD Course : !!!!!!!!" + courseId)
        findModulesForCourse(courseId)
    }, [])
    return(
        <div>
            <h2 className={"module-list-title"}>Modules</h2>
            {/*<ul>*/}
            {/*    <li>layout: {layout}</li>*/}
            {/*    <li>courseId: {courseId}</li>*/}
            {/*    <li>moduleId: {moduleId}</li>*/}
            {/*</ul>*/}
            <ul className="list-group">
                {
                    myModules.map(module =>
                        <li className={`list-group-item wbdv-group-background d-flex justify-content-between align-items-center ${module._id === moduleId ? 'active' : ''}`}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                // active={true}
                                item={module}/>
                        </li>
                    )
                }
                <li className="list-group-item wbdv-group-add" align="center">
                    <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}
const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },
        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                })),
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),
        findModulesForCourse: (courseId) => {
            // alert(courseId);
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModules
                }))
            lessonService.findLessonsForModule(undefined)
                .then(lessons => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    lessons: lessons
                }))
            topicService.findTopicsForLesson(undefined)
                .then(topics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics: topics
                }))
        }
    }
}

export default connect(stpm, dtpm)
(ModuleList)