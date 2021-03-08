import React from 'react'
import {Link, useParams} from "react-router-dom";
import "./course-editor-style.css";
import {combineReducers, createStore} from "redux";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {Provider} from "react-redux";
import ModuleList from "./module-list/module-list";
import LessonTabs from "./lesson-tabs/lesson-tabs";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
})

const store = createStore(reducer)
// const CourseEditor = ({props}) =>
const CourseEditor = ({history, params}) => {
    const {layout, courseId, moduleId} = useParams();
    return (
        <Provider store={store}>
            <div>
                <h2>
                    <Link to="/courses/table">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    Course Editor {courseId} {moduleId}
                    <i onClick={() => history.goBack()}
                       className="fas fa-times float-right"></i>
                    {/*<i onClick={() => props.history.goBack()}*/}
                    {/*   className="fas fa-times float-right"></i>*/}
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                    </div>
                </div>
            </div>
        </Provider>)}

    // <div className="wbdv-editor-body">


    {/*    <div className="wbdv-sticky-top">*/}
    {/*        <div className="row">*/}
    {/*            <Provider store = {store}>*/}
    {/*            <div className="col-1 wbdv-header-back-btn">*/}
    {/*                <i onClick={() => history.goBack()}*/}
    {/*                   className="fas fa-times fa-2x "></i>*/}
    {/*            </div>*/}
    {/*                <ModuleList/>*/}
    {/*                <LessonTabs/>*/}
    {/*            </Provider>*/}
    {/*            <div className="col-3 wbdv-editor-nav-title">*/}
    {/*                Course Editor*/}
    {/*            </div>*/}
    {/*            <div className="col"></div>*/}
    {/*        </div>*/}
    {/*    </div>*/}


    {/*    <div className="container wbdv-container-position">*/}
    {/*        <div className="row">*/}
    {/*            <div className="col-4">*/}
    {/*                <ul className="list-group">*/}
    {/*                    <li className="list-group-item wbdv-group-background">*/}
    {/*                        Module 1*/}
    {/*                        <i className="pull-right fas fa-times"></i>*/}
    {/*                    </li>*/}
    {/*                    <li className="list-group-item wbdv-group-background">*/}
    {/*                        Module 2*/}
    {/*                        <i className="pull-right fas fa-times"></i>*/}
    {/*                    </li>*/}
    {/*                    <li className="list-group-item wbdv-group-background">*/}
    {/*                        Module 3*/}
    {/*                        <i className="pull-right fas fa-times"></i>*/}
    {/*                    </li>*/}
    {/*                    <li className="list-group-item wbdv-group-background">*/}
    {/*                        Module 4*/}
    {/*                        <i className="pull-right fas fa-times"></i>*/}
    {/*                    </li>*/}
    {/*                    <li className="list-group-item wbdv-group-background">*/}
    {/*                        Module 5*/}
    {/*                        <i className="pull-right fas fa-times"></i>*/}
    {/*                    </li>*/}
    {/*                    <li className="list-group-item wbdv-group-background">*/}
    {/*                        Module 6*/}
    {/*                        <i className="pull-right fas fa-times"></i>*/}
    {/*                    </li>*/}
    {/*                    <li className="list-group-item wbdv-group-background">*/}
    {/*                        Module 7*/}
    {/*                        <i className="pull-right fas fa-times"></i>*/}
    {/*                    </li>*/}
    {/*                    <li className="list-group-item wbdv-group-add" align="center">*/}
    {/*                        <i className="fas fa-plus"></i>*/}
    {/*                    </li>*/}
    {/*                </ul>*/}
    {/*            </div>*/}
    {/*            <div className="col-8">*/}
    {/*                <ul className="nav nav-tabs">*/}
    {/*                    <li className="nav-item">*/}
    {/*                        <a className="nav-link active" aria-current="page" href="#">*/}
    {/*                            Build*/}
    {/*                            <i className="pull-right fas fa-times"></i>*/}
    {/*                        </a>*/}
    {/*                    </li>*/}
    {/*                    <li className="nav-item">*/}
    {/*                        <a className="nav-link wbdv-tab-font" href="#">Pages</a>*/}
    {/*                    </li>*/}
    {/*                    <li className="nav-item">*/}
    {/*                        <a className="nav-link wbdv-tab-font" href="#">Theme</a>*/}
    {/*                    </li>*/}
    {/*                    <li className="nav-item">*/}
    {/*                        <a className="nav-link wbdv-tab-font" href="#">Store</a>*/}
    {/*                    </li>*/}
    {/*                    <li className="nav-item">*/}
    {/*                        <a className="nav-link wbdv-tab-font" href="#">Apps</a>*/}
    {/*                    </li>*/}
    {/*                    <li className="nav-item">*/}
    {/*                        <a className="nav-link wbdv-tab-font" href="#">Settings</a>*/}
    {/*                    </li>*/}

    {/*                    <li className="nav-item">*/}
    {/*                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">*/}
    {/*                            <i className="fa fa-plus wbdv-tab-delete-logo"></i>*/}
    {/*                        </a>*/}
    {/*                    </li>*/}
    {/*                </ul>*/}
    {/*                <ul className="nav nav-pills">*/}
    {/*                    <li className="nav-item ">*/}
    {/*                        <a className="nav-link active wbdv-tab-font" aria-current="page" href="#">*/}
    {/*                            Topic 1*/}
    {/*                            <i className="pull-right fas fa-times"></i>*/}
    {/*                        </a>*/}
    {/*                    </li>*/}
    {/*                    <li className="nav-item">*/}
    {/*                        <a className="nav-link wbdv-tab-font" href="#">Topic 2</a>*/}
    {/*                    </li>*/}
    {/*                    <li className="nav-item">*/}
    {/*                        <a className="nav-link wbdv-tab-font" href="#">Topic 3</a>*/}
    {/*                    </li>*/}
    {/*                    <li className="nav-item">*/}
    {/*                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">*/}
    {/*                            <i className="fa fa-plus wbdv-tab-delete-logo"></i>*/}
    {/*                        </a>*/}
    {/*                    </li>*/}
    {/*                </ul>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}

    {/*</div>*/}

export default CourseEditor
