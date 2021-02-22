import React from 'react'
import CourseRow from "../courseRow/course-row";
import {Link} from "react-router-dom";
import "./course-table-style.css";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div>
                <div className="wbdv-header-top">
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
                            <Link to="/courses/grid">
                                <i className="fas fa-2x fa-th float-right"></i>
                            </Link>
                            <i className="fas fa-2x  fa-sort-alpha-up-alt float-right"></i>
                            <i className="fas fa-2x  fa-folder float-right"></i>
                        </div>
                    </div>
                </div>
                {/*<Link to="/courses/grid">*/}
                {/*    <i className="fas fa-2x fa-th float-right"></i>*/}
                {/*</Link>*/}
                {/*<h2>Course Table</h2>*/}
                <br/>
                <div className="container wbdv-container-position">
                <table className="table">
                    <tbody>
                    {/*<CourseRow title="CS1234" owner="alice" lastModified={"1/12/34"}/>*/}
                    {/*<CourseRow title="CS2345" owner="bob"   lastModified={"2/23/24"}/>*/}
                    {/*<CourseRow title="CS3456" owner="charlie" lastModified={"3/22/14"}/>*/}
                    {/*<CourseRow title="CS4567" owner="dan"   lastModified={"4/12/36"}/>*/}
                    {
                        this.props.courses.map((course) =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={course._id}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
