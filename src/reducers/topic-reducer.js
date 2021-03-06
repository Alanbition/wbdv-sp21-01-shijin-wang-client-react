const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            const newState=  {
                // ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
            return newState
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }
        case "DELETE_TOPIC":
            // alert("delete the module " + action.moduleToDelete.title)
            const newState1 = {
                topics: state.topics.filter(topic => {
                    if(topic._id === action.topicToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(m => {
                    if(m._id === action.topic._id) {
                        return action.topic
                    } else {
                        return m
                    }
                })
            }
        case "CLEAN_TOPIC":
            return {
                ...state,
                topics:[]
            }
        default:
            return state
    }
}

export default topicReducer