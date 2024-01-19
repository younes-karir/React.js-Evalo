import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "../../components/ui/GlobalStyle/GlobaleStyle";
import setAuthToken from "../../store/actions/setAuthToken";
import Home from "../Home";
import LoginPage from "../LoginPage/index";
import SignupPage from "../Signup";
import store from "../../store/Store";
import { UserGetting } from "../../store/actions/authentication";
import Confirm from "../../components/ui/ConfirmeMessage";
import Questionnaire from "../Questionnaire";
import GlobalLoading from "../../components/ui/GlobalLoading";
import { useSelector } from "react-redux";

// if authentificated user
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  store.dispatch(UserGetting());
}
else{
  // console.log('not logged')
}

const App = () => {
  const isLoading = useSelector(state => state.auth.isLoading);

  console.log(isLoading);
  return (
    <Fragment>
      <GlobalLoading isloading = {isLoading}/>
      <Confirm />
      <GlobalStyle />
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/accueil/*" element={<Home />} />
          <Route path="/questionnaire/*" element={<Questionnaire />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
