import { CLEAR_QST_QUESTIONS, GET_QST_EXAM, GET_QST_ID, GET_QST_QUESTIONS } from "../actions/types";

const initialState = {
  questionnaire: "empty",
  exam: "empty",
  questions: "empty",
  eleve: "empty",
  isAcive : false
};

const QuestionnaireReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_QST_ID:
      return {
        ...state,
        questionnaire: action.payload.Qst,
        eleve: action.payload.eleve,
        isAcive :true,
      };
    case GET_QST_EXAM:
      return {
        ...state,
        exam: action.payload.data,
      };
    case GET_QST_QUESTIONS:
      return {
        ...state,
        questions: action.payload.data,
      };

    case CLEAR_QST_QUESTIONS : 
    return {
      ...state,
      questions : "empty"
    }

    default:
      return state;
  }
};

export default QuestionnaireReducer;
