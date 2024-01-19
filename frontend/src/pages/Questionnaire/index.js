import { Route, Routes } from "react-router-dom";
import Auth from "./Elements/Auth";
import Start from "./Elements/Start";

const Questionnaire = () => {
  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route path="start" element={<Start />} />
    </Routes>
  );
};

export default Questionnaire;
