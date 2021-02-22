import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./course-row-style.css";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    // const deleteRow = () => {
    //     deleteCourse(course)
    //     const newCourse = {
    //         ...course
    //     }
    //     setEditing(false)
    // }

    return (
        <tr>
            <td>
                {
                    !editing &&
                    <Link to="/courses/editor">
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
            </td>
            <td>{owner}</td>
            <td>{lastModified}</td>
            <td>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x float-right"></i>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-check fa-2x float-right"></i>}
                {editing && <i onClick={() => {deleteCourse(course); setEditing(false);}} className="fas fa-trash fa-2x float-right"></i>}
            </td>
        </tr>
    )
}
export default CourseRow
