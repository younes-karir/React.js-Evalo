import { CLASS_ALL_SUCCESS, GET_LAST_CLASS, GET_SELECTED_CLASS, SELECTED_CLASS_CLEAR } from "../actions/types";

const initialState = {
    list:[],
    selected:"empty",
    last:"empty",
};

const classReducer = function(state = initialState, action ) {
    switch(action.type) {
        case CLASS_ALL_SUCCESS:
            return {
                ...state,
                list:action.payload.data,
            }

        case GET_SELECTED_CLASS :
            const item  =state.list.find(item => item._id === action.payload.id)
            return {
                ...state,
                selected:item
            }
        case GET_LAST_CLASS :
            return {
                ...state,
                last:action.payload.data
            }
        case SELECTED_CLASS_CLEAR :
            return initialState;
        default: 
            return state;
    }
}


export default classReducer;