import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Position from "../../../../components/Position";
import TableListClasses from "../../../../components/Tables/ClassesTable";
import { getAll } from "../../../../store/actions/classes";
import {
  Container,
  ExamsWrapper,
} from "./Classes.elements";

const ClassesList = () => {
  const dispatch = useDispatch();
  let list = useSelector((state) => state.class.list);
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  return (
    <Container>
      <Position />
      <ExamsWrapper>
        <TableListClasses classeslist={list} isloading={isLoading} />
      </ExamsWrapper>
    </Container>
  );
};

export default ClassesList;
