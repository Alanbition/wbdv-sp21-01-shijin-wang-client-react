import React, {useState} from "react";
import {Link} from "react-router-dom";
import './question-css.css';
import quizService from "../../../services/quiz-service";
const MultipleChoiceQuestion = ({question, quizId}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [yourChoice, setYourChoice] = useState("")
    const [graded, setGraded] = useState(false)
    return(
        <div>
            <h5>
                {question.question}
                {
                    graded && question.correct === yourAnswer &&
                    <i className="fas fa-check correct" ></i>
                }
                {
                    graded && question.correct !== yourAnswer &&
                    <i className="fas fa-times false"></i>
                }
            </h5>
            <ul className="list-group group-style">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item
                            ${
                                graded && choice === question.correct? 'list-group-item-success': graded && yourAnswer === choice? 'list-group-item-danger':''
                            }`}>
                                <label><input onClick={() => {setYourAnswer(choice);}}
                                              type="radio" name={question._id}/> {choice}</label>
                                {
                                    graded && choice === question.correct && yourAnswer === choice &&
                                    <i className="fas fa-check correct float-right" ></i>
                                }
                                {
                                    graded && choice !== question.correct && yourAnswer === choice &&
                                    <i className="fas fa-times false float-right"></i>
                                }
                                {
                                    console.log("selectedId: " + question._id + " yourChoice: " + yourChoice)
                                }

                            </li>

                        )
                    })
                }
            </ul>
            {
                graded && <p>Your answer: {question.answer = yourAnswer}</p>
            }
            {
                !graded && <p>Your answer: </p>
            }


            <a onClick={() => {setGraded(true);setYourChoice(question._id)}} className="btn btn-success" href="#" role="button">Grade</a>

        </div>
    )
}

export default MultipleChoiceQuestion