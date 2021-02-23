import React, {useState} from 'react'
import CourseTable from "../courseTable/course-table";
import CourseGrid from "../courseGrid/course-grid";
import CourseEditor from "../courseEditor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../../services/course-service";
import './course-manager-style.css';

class CourseManager extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            courses: [],
            courseName: ""
        }
    }
    deleteCourse = (course) => {
        // alert("delete course " + course._id)
        courseService.deleteCourse(course._id)
            .then(status => {
                // this.setState({
                //   courses: this.state.courses.filter(c => c._id !== course._id)
                // })
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }
    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    componentDidMount () {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    addCourse = () => {
        const newCourse = {
            title: this.state.courseName,
            owner: "Me",
            lastModified: "Current Time"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))
        this.setState({
            courseName: ""
        })


        // this.state.courses.push(newCourse)
        // this.setState(this.state)
    }

    addCourseWithName(evt){
        this.setState({
            courseName: evt.target.value
        })
    }



    render() {
        return(
            <div className="container-fluid p-0">
                {/*<div className="row no-gutters" >*/}
                <div className="wbdv-sticky-top">
                    <div className="row" >
                        <div className="col">
                            <i className="fas fa-bars fa-2x wbdv-nav-hbg-logo"></i>
                        </div>
                        <div className="col-2 d-none d-lg-block wbdv-nav-title">
                            Course Manager
                        </div>
                        <div className="col-8">
                            <input type="text"
                                   className="form-control"
                                   // onChange={(event) => setNewTitle(event.target.value)}
                                    onChange={evt => this.addCourseWithName(evt)}
                                   value={this.state.courseName}
                            />
                        </div>

                        <div className="col-1">
                            <a className="fas fa-plus fa-2x wbdv-nav-plus-logo" role="button" onClick={this.addCourse}></a>
                        </div>
                    </div>
                </div>
            {/*</div>*/}



                {/*<Link to="/">*/}
                {/*    <i className="fas fa-2x fa-home float-right"></i>*/}
                {/*</Link>*/}
                {/*<h1>Course Manager</h1>*/}
                {/*<button onClick={this.addCourse}>Add Course</button>*/}
                <div>
                    <Route path="/courses/table">
                        <CourseTable
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>
                    <Route path="/courses/grid">
                        <CourseGrid
                            // updateCourse={this.updateCourse}
                            // deleteCourse={this.deleteCourse}
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>
                    <div >
                        <a className="fas fa-plus fa-4x fixed-bottom wbdv-bottom-plus" role="button" onClick={this.addCourse}></a>
                    </div>

                </div>
                <div>
                    <Route path="/courses/editor"
                           render={(props) => <CourseEditor {...props}/>}>
                    </Route>
                </div>
                {/*<Route path="/courses/editor">*/}
                {/*    <CourseEditor/>*/}
                {/*</Route>*/}
                {/*<Route path="/courses/editor"*/}
                {/*       render={(props) => <CourseEditor props={props}/>}>*/}
                {/*</Route>*/}

            </div>
        )
    }
}

export default CourseManager
