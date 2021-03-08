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
            <td className="text-left course-row-title">
                {
                    !editing &&
                    <i className="fas fa-file"></i>
                }
                {
                    !editing &&
                    <Link className="course-row-title" to={`/courses/table/edit/${course._id}`}>
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
            <td className="d-none d-sm-table-cell text-center course-row-owner">{owner}</td>
            <td className="d-none d-lg-table-cell text-center course-row-date"> {lastModified}</td>
            <td className="text-center course-row-edit">
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x text-center"></i>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-check fa-2x text-center "></i>}
                {editing && <i onClick={() => {deleteCourse(course); setEditing(false);}} className="fas fa-times fa-2x text-center"></i>}
            </td>
        </tr>
    )
}
export default CourseRow
