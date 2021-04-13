import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service"

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizService.findAllQuiz()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div>
            <Link to={`/courses/table`}>
                <i role={"btn"}
                   className="wbdv-header-back-btn fas fa-times fa-2x "></i>
            </Link>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="list-group-item">
                                {quiz.title}
                                <a className="btn btn-primary float-right" href="#" role="button">Start</a>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;