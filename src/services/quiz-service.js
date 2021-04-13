const QUIZ_URL = "http://localhost:3000/api/quizzes";



export const findAllQuiz = () =>
    fetch(`${QUIZ_URL}`)
        .then(response => response.json())

export const findQuestionsForQuiz = (quizId) =>
    fetch(`${QUIZ_URL}/${quizId}/questions`)
        .then(response => response.json())


const api = {
    findAllQuiz, findQuestionsForQuiz
}
export default api