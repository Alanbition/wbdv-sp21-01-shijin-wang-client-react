import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import "./course-editor-style.css";
import {combineReducers, createStore} from "redux";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import courseReducer from "../../reducers/course-reducer";
import widgetReducer from  "../../reducers/widget-reducer";
import {connect, Provider} from "react-redux";
import ModuleList from "./module-list/module-list";
import LessonTabs from "./lesson-tabs/lesson-tabs";
import TopicPills from "./topic-pills/topic-pills";
import courseService from "../../services/course-service"
import lessonService from "../../services/lesson-service";
import WidgetList from "./widgets/widget-list";


const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    courseReducer: courseReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)

// const CourseEditor = ({props}) =>
const CourseEditor = ({history, params}) => {
    const {layout, courseId, moduleId} = useParams();
    const [newCourse, setCourse] = useState([])


    useEffect(() => {
        console.log("FIND_COURSE_NAME_FROM_ID----  "+courseId)
        // if(courseId !== "undefined" && typeof courseId !== "undefined") {
        //
        // }
        courseService.findCourseById(courseId).then(item => setCourse(item))
    }, [courseId])



    return (
        <Provider store={store}>
            <div className="wbdv-editor-body">
                {/*<h2>*/}
                {/*    /!*<Link to="/courses/table">*!/*/}
                {/*    /!*    <i className="fas fa-arrow-left"></i>*!/*/}
                {/*    /!*</Link>*!/*/}
                {/*    <i onClick={() => history.goBack()}*/}
                {/*       className="fas fa-times float-left"></i>*/}
                {/*    Course Editor {courseId} {moduleId}*/}
                {/*    /!*<i onClick={() => props.history.goBack()}*!/*/}
                {/*    /!*   className="fas fa-times float-right"></i>*!/*/}
                {/*</h2>*/}
                <div className="wbdv-sticky-top">
                    <div className="row">
                        {/*<div className="col-1 wbdv-header-back-btn">*/}
                        {/*    <i onClick="location.href='/courses/table'" role={"button"}*/}
                        {/*       className="fas fa-times fa-2x "></i>*/}
                        {/*</div>*/}
                        <div className="col-1">
                            <Link to={`/courses/${layout}`}>
                                <i role={"btn"}
                                   className="wbdv-header-back-btn fas fa-times fa-2x "></i>
                            </Link>
                            {/*<i onClick="location.href='/courses/table'" role={"button"}*/}
                            {/*   className="fas fa-times fa-2x "></i>*/}
                        </div>
                        <div className="col-3 wbdv-editor-nav-title">
                            Course Editor : {newCourse.title}
                        </div>

                        <div className="col"></div>
                    </div>
                </div>
                <div className="container wbdv-container-position">
                    <div className="row">
                        <div className="col-4">
                            <ModuleList/>
                        </div>
                        <div className="col-8">
                            <LessonTabs/>
                            <br/>
                            <TopicPills/>
                            <br/>
                            <WidgetList/>

                        </div>
                    </div>
                </div>
            </div>
        </Provider>)}


export default CourseEditor