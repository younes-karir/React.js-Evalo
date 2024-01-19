// errorReducer.js

import { CLEAR_ERR, GET_ERRORS } from '../actions/types';

const initialState = {};

const errorReducer = function(state = initialState, action ) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        case CLEAR_ERR:
            return initialState;
        default: 
            return state;
    }
}

export default errorReducer;