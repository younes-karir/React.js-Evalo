import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/index";
import Classes from "./Elements/Classes";
import ClassesList from "./Elements/ClassesList";

import Dash from "./Elements/Dash";
import Exams from "./Elements/Exams";
import ExamsList from "./Elements/ExamsList";
import Questionnaire from "./Elements/Questionnaire";


const Home = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();


  useEffect(() => {
    if(!isAuth){
      navigate('/login',{
        replace:true,
      })
      
    }
  }, [isAuth,navigate])
  
  

  return (
    <Layout>
      <Routes>
        <Route index element={<Dash />} />
        <Route path="classes" element={<ClassesList />} />
        <Route path="classes/:id" element={<Classes />} />
        <Route path="exams" element={<ExamsList />} />
        <Route path="exams/:id" element={<Exams />} />
        <Route path="questionnaire" element={<Questionnaire />} />
      </Routes>
    </Layout>
  );
};

export default Home;
