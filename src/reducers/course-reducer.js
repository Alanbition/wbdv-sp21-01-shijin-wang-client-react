const initialState = {
    course: ""
}

const courseReducer = (state=initialState, action) => {
    switch (action.type) {
        // case "CREATE_LESSON":
        //     const newState = {
        //         // ...state,
        //         lessons: [
        //             ...state.lessons,
        //             action.lesson
        //         ]
        //     }
        //     return newState
        case "FIND_COURSE_NAME":
            return {
                course: action.course
            }
        // case "DELETE_LESSON":
        //     // alert("delete the module " + action.moduleToDelete.title)
        //     const newState1 = {
        //         lessons: state.lessons.filter(lesson => {
        //             if(lesson._id === action.lessonToDelete._id) {
        //                 return false
        //             } else {
        //                 return true
        //             }
        //         })
        //     }
        //     return newState1
        // case "UPDATE_LESSON":
        //     return {
        //         lessons: state.lessons.map(m => {
        //             if(m._id === action.lesson._id) {
        //                 return action.lesson
        //             } else {
        //                 return m
        //             }
        //         })
        //     }
        default:
            return state
    }
}



export default courseReducer