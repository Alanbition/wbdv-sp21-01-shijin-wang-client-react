import React, {useState} from "react";
import quizService from "../../../services/quiz-service"

const TrueFalseQuestion = ({question, quizId}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [graded, setGraded] = useState(false)
    return (
        <div>
            <h4>
                {question.question}
                {
                    graded && yourAnswer === question.correct &&
                    <i className="fas fa-check correct"></i>
                }
                {
                    graded && yourAnswer !== question.correct &&
                    <i className="fas fa-times  false"></i>
                }
            </h4>
            {/*{question.correct}*/}
            {/*<br/>*/}
            {/*{JSON.stringify(answer)}*/}
            {/*<br/>*/}
            <ul className="list-group group-style">
                <li className={`list-group-item ${graded && ('true' === question.correct)? 
                    'list-group-item-success': graded && yourAnswer === 'true'? 'list-group-item-danger':''
                }`}>
                    <label><input
                        type="radio"
                        onClick={() => setYourAnswer("true")}
                        name={question._id}/>True</label>
                        {
                            graded && yourAnswer === question.correct && yourAnswer === 'true' &&
                            <i className="fas fa-check correct float-right" ></i>
                        }
                        {
                            graded && yourAnswer !== question.correct && yourAnswer === 'true' &&
                            <i className="fas fa-times false float-right"></i>
                        }
                </li>
                <li className={`list-group-item ${graded && 'false' === question.correct?
                    'list-group-item-success': graded && yourAnswer === 'false'? 'list-group-item-danger':''
                }`}>
                    <label><input
                        type="radio"
                        onClick={() => setYourAnswer("false")}
                        name={question._id}/>False</label>
                        {
                            graded && yourAnswer === question.correct && yourAnswer === 'false' &&
                            <i className="fas fa-check correct float-right" ></i>
                        }
                        {
                            graded && yourAnswer !== question.correct && yourAnswer === 'false' &&
                            <i className="fas fa-times false float-right"></i>
                        }
                </li>
            </ul>
            {
                graded && <p>Your answer: {question.answer = yourAnswer}</p>            }
            {
                !graded && <p>Your answer: </p>
            }
            <a onClick={() => {setGraded(true)}} className="btn btn-success" href="#" role="button">Grade</a>
        </div>
    )
}

export default TrueFalseQuestion;