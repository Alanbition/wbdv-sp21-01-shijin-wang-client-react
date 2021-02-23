import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {deleteCourse, updateCourse} from "../../../services/course-service";
import "./course-card-style.css";
const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        course
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        // eslint-disable-next-line no-undef
        updateCourse(newCourse)
    }




    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div className="card">
                <img src="https://reactjs.org/logo-og.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    {/*<h5 className="card-title">{course.title}</h5>*/}
                    {
                        !editing &&
                        <Link className="card-body-title" to="/courses/editor">
                            {course.title}
                        </Link>
                    }
                    {
                        editing &&
                        <input
                            onChange={(event) => setTitle(event.target.value)}
                            value={title}
                            className="form-control"/>
                    }
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    <img src={``}/>
                    <Link to="/courses/editor" className="btn btn-dark">
                        Enter Course
                    </Link>
                    {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x float-right"></i>}
                    {editing && <i onClick={() => saveTitle()} className="fas fa-check fa-2x float-right"></i>}
                    {editing && <i onClick={() => {deleteCourse(course); setEditing(false);}} className="fas fa-trash fa-2x float-right"></i>}
                </div>
            </div>
        </div>
    )
}


export default CourseCard