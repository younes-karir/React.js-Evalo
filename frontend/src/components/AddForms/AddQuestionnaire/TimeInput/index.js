import { TimeFieldStyled } from "./TimeInput.elements";

const TimeInput = (props) => {
  const TimeHandler = (event, time) => {
    props.setSelected(time);
  };

  return <TimeFieldStyled value={props.selected} onChange={TimeHandler} />;
};

export default TimeInput;
