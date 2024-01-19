// import { configureStore } from "@reduxjs/toolkit";
// import ExamItemSlice from "./Slices/Exams/ExamItem/ExamItem-slice";
// import ExamsSlice from "./Slices/Exams/ExamsList/ExamsList-slice";
// import LoadingSlice from "./Slices/UI/Loading-slice";
// import uiSlice from "./Slices/UI/ui-slice";



// const Store = configureStore({
//     reducer:{
//         UI:uiSlice,
//         Exams:ExamsSlice,
//         ExamItem:ExamItemSlice,
//         Loading : LoadingSlice,
//     }
// });


// export default Store;



import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const inititalState = {};

const store = createStore(
        rootReducer, 
        inititalState, 
        compose(applyMiddleware(thunk), 
                window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;