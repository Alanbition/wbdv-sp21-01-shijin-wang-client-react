const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001052126/modules";
const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/001052126/lessons";



export const createLesson = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(response => response.json())



// updateLesson(lessonId, lesson)
// updates one lesson whose ID is lessonId
// deleteLesson(lessonId)
// removes lesson whose ID is lessonId
export const updateLesson = (lessonId, lesson) =>
    fetch(`${LESSON_URL}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());


export const deleteLesson = (lessonId) =>
    fetch(`${LESSON_URL}/${lessonId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

const api = {
    findLessonsForModule, createLesson, updateLesson, deleteLesson
}
export default api