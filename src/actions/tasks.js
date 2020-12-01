export const COMPLETED_CHANGE = 'COMPLETED_CHANGE'

export const handleCompletedChange = (newCompleted) => ({
    type: COMPLETED_CHANGE,
    payload: newCompleted
})
