import Select from "react-select";

const SelectListExams = (props) => {
  let options = [];

  if (props.list !== undefined) {
    if (props.list.length > 0) {
      props.list.map((item) =>
        options.push({
          label: item.titre + " [ " + item.matiere + " ]",
          value: item._id,
        })
      );
    }
  }
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      height: "36px",
      width: "100%",
      fontSize: ".9rem",
      letterSpacing: "0.1px",
      "&:hover": {
        cursor: "pointer",
      },
    }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        fontSize: ".9rem",
        height: "3rem",
        overFlow: "scroll",
        "&:hover": {
          cursor: "pointer",
        },
      };
    },
  };

  return (
    <Select
      placeholder="Sélectionner"
      options={options}
      styles={colourStyles}
      value={props.seleted}
      onChange={(value) => props.setSelected(value)}
    />
  );
};

export default SelectListExams;
