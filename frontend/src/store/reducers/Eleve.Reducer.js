import { ELEVES_ALL_SUCCESS, ELEVES_CLEAR } from "../actions/types";

const initialState = {
    list:"empty",
};

const EleveReducer = function(state = initialState, action ) {
    switch(action.type) {
        case ELEVES_ALL_SUCCESS:
            return {
                ...state,
                list:action.payload.data,
            }

        case ELEVES_CLEAR : 
        return initialState;
        default: 
            return state;
    }
}


export default EleveReducer;