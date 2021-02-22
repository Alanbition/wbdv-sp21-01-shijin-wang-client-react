// createCourse(course) creates a new course instance and adds it to the collection of courses
// findAllCourses() retrieves all course instances as an array of courses
// findCourseById(id) retrieves a course instance that matches the id parameter
// updateCourse(id, course) updates the course instance whose id matches the id parameter. Updates the instance with values in course parameter
// deleteCourse(id) deletes course instance whose id matches the id parameter

const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001052126/courses";

export const findCourseById = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'GET'
    })
        .then(response => response.json())

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())

export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateCourse = (courseId, course) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findAllCourses,
    deleteCourse: deleteCourse,
    createCourse,
    updateCourse: updateCourse,
    findCourseById: findCourseById
}
