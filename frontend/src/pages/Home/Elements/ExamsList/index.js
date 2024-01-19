import { Container, ExamsWrapper } from "./ExamsList.elements";

import Position from "../../../../components/Position";
import TableListExams from "../../../../components/Tables/ExamsTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAll } from "../../../../store/actions/exams";

const ExamsList = () => {
  const dispatch = useDispatch();
  let ExamsList = useSelector((state) => state.exam.list);
  const isLoading = useSelector((state) => state.loading.isLoading);

  ExamsList.map(item => item);

  useEffect(() => {
    dispatch(getAll(true));
  }, [dispatch]);

  return (
    <Container>
      <Position />
      <ExamsWrapper>
        <TableListExams examslist={ExamsList} isloading={isLoading} />
      </ExamsWrapper>
    </Container>
  );
};

export default ExamsList;
