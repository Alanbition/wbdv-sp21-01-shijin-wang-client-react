import React from 'react'
import CourseCard from "../courseCard/course-card";
import {Link} from "react-router-dom";
import {deleteCourse, updateCourse} from "../../services/course-service";
import CourseRow from "../courseRow/course-row";
import "./course-gird-style.css";

const CourseGrid = ({updateCourse, deleteCourse, courses}) =>
    <div>
        {/*<Link to="/courses/table">*/}
        {/*    <i className="fas fa-list fa-2x float-right"></i>*/}
        {/*</Link>*/}
        {/*<h2>Course Grid {courses.length}</h2>*/}
        <div className="row wbdv-header-text">
            <div className="col-3 wbdv-header-title">
                Title
                <i className="fa fa-sort"></i>
            </div>
            <div className="col-3 d-none d-lg-block  wbdv-header-belong">
                Owned by
                <i className="fas fa-sort-down"></i>
            </div>
            <div className="col-4 d-none d-lg-block  wbdv-header-modified">
                Last Modified by me
            </div>
            <div className="col-2 d-none d-lg-block  wbdv-header-view">
                <Link to="/courses/table">
                    <i className="fas fa-2x fa-list  float-right"></i>
                </Link>
                <i className="fas fa-2x  fa-sort-alpha-up-alt float-right"></i>
                <i className="fas fa-2x  fa-folder float-right"></i>
            </div>
        </div>
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

export default CourseGrid
