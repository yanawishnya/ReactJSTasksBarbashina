import { combineReducers } from "redux";
import { tasksReducer } from "./tasks";
import { themeReducer } from "./theme";

export const rootReducer = combineReducers({
    theme: themeReducer,
    task: tasksReducer,
});