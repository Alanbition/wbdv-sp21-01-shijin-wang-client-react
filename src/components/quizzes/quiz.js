import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionService from "../../services/quiz-service"

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        // TODO: move this to a service file
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
    },[])

    return(
        <div>
            <Link to={`/courses/table`}>
                <i role={"btn"}
                   className="wbdv-header-back-btn fas fa-times fa-2x "></i>
            </Link>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                        <li>
                            <Question question={question}/>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Quiz;