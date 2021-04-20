const QUIZ_URL = "http://localhost:3000/api/quizzes";

export const submitQuiz = (quizId, questions) =>
    // console.log("quizId: "+ quizId+ " "+questions.correct)
    fetch(`${QUIZ_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        // .then(result => console.log(result))



export const findAllQuiz = () =>
    fetch(`${QUIZ_URL}`)
        .then(response => response.json())

export const findQuestionsForQuiz = (quizId) =>
    fetch(`${QUIZ_URL}/${quizId}/questions`)
        .then(response => response.json())


const api = {
    findAllQuiz, findQuestionsForQuiz, submitQuiz
}
export default api