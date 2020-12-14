import {CHANGE_THEME} from "../actions/theme"

const initialState = {
    theme: "light"
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                theme: action.payload
            };
        }
        default:
            return state;
    }
};