import { ADD_TASK } from "../actions/task"
import { COMPLETED_CHANGE } from "../actions/tasks"

const initialState = {
    tasks: []
}

export const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: {
            return {
                tasks: [...state.tasks, action.payload]
            }
        }
        case COMPLETED_CHANGE: {
            let newTasks = [...state.tasks]
            newTasks[action.payload.id] = action.payload
            return {
                tasks: newTasks
            }
        }
        default:
            return state
    }
}