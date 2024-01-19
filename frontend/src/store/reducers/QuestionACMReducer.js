import { QUESTIONS_ALL_SUCCESS, QUESTIONS_CLEAR } from "../actions/types";

const initialState = {
    list:"empty",
};

const QuestionACMReducer = function(state = initialState, action ) {
    switch(action.type) {
        case QUESTIONS_ALL_SUCCESS:
            return {
                ...state,
                list:action.payload.data,
            }

        case QUESTIONS_CLEAR : 
        return initialState;
        default: 
            return state;
    }
}


export default QuestionACMReducer;