export const ADD_TASK = 'ADD_TASK'

export const handleAddTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}