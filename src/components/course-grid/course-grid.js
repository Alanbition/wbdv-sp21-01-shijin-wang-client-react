import React from 'react'
import CourseCard from "./course-card/course-card";
import {Link} from "react-router-dom";
import {deleteCourse, updateCourse} from "../../services/course-service";
import CourseRow from "../course-table/course-row/course-row";
import "./course-gird-style.css";



const CourseGrid = ({updateCourse, deleteCourse, courses}) =>
    <div>

        <div className="wbdv-header-top">
            <table className="table">
                <thead className="thead-theme">
                <tr>
                    <th className="wbdv-header-title text-center">
                        Recent Documents
                    </th>
                    <th className="d-none d-sm-table-cell wbdv-header-belong text-center">
                        Owned by
                        <i className="fas fa-sort-down"></i>
                    </th>
                    <th className="text-right">
                        <i className="fas fa-folder wbdv-header-view"></i>
                    </th>
                    <th className="text-center">
                        <i className="fas fa-sort-alpha-up-alt wbdv-header-view"></i>
                    </th>
                    <th className="text-left">
                        <Link to="/courses/table">
                            <i className="fas fa-list wbdv-header-view"></i>
                        </Link>
                    </th>
                </tr>
                </thead>
            </table>
        </div>

        <div className=" wbdv-container-position">
        <div className="row">
            {
                courses.map((course) =>
                    <CourseCard
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        course={course}
                        key={course._id}
                    />
                )
            }
        </div>
        </div>

    </div>

export default CourseGrid
