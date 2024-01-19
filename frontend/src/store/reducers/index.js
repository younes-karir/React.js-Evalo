import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import classReducer from './Class.Reducer';
import ConfirmReducer from './ConfirmReducer';
import EleveReducer from './Eleve.Reducer';
import errorReducer from './errorReducer';
import examReducer from './examsReducer';
import LoadingReducer from './LoadingReducer';
import notification from './NotificationsReducer';
import Primary from './Primary';
import QuestionACMReducer from './QuestionACMReducer';
import QuestionnaireReducer from './Questionnaire.Reducer';
import Theme from './Theme';
import UIReducer from './UIReducer';

export default combineReducers({
    errors: errorReducer,
    loading : LoadingReducer,
    notification : notification,
    UI : UIReducer,
    Confirm: ConfirmReducer,
    auth: AuthReducer,
    exam:examReducer,
    QuestionACM : QuestionACMReducer,
    class:classReducer,
    eleve:EleveReducer,
    questionnaire : QuestionnaireReducer,
    theme:Theme,
    primary:Primary,
});