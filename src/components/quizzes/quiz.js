import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionService from "../../services/quiz-service"
import quizService from "../../services/quiz-service";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
    },[])

    return(
        <div>
            <p>Your Score: {score}</p>
            <Link to={`/courses/table`}>
                <i role={"btn"}
                   className="wbdv-header-back-btn fas fa-times fa-2x "></i>
            </Link>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                        <li>
                            <Question question={question}
                                       quizId = {quizId}/>
                        </li>
                    )
                }
                <br/>
                <a onClick={() => {quizService.submitQuiz(quizId, questions).then(ans => setScore(ans.score))}} className="btn btn-success" href="#" role="button">Submit</a>
            </ul>
        </div>
    );
}

export default Quiz;