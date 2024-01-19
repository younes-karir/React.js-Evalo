import Select from "react-select";

const SelectList = (props) => {

  const options = [
    { label: "1 ère année collège", value: 1 },
    { label: "2 ème année collège", value: 2 },
    { label: "3 ème année collège", value: 3 },
    { label: "Tronc commun", value: 4 },
    { label: "1 ère année Bac", value: 4 },
    { label: "2 ème année Bac", value: 4 },
  ];

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      height:'36px',
      width: "100%",
      fontSize:'.9rem',
      letterSpacing: '0.5px',
    }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        fontSize:'.9rem',
      };
    },
  };

  return (
    <Select
      options={options}
      value={props.Selected}
      onChange={(value) => props.setSelected(value)}
      defaultValue={{ label: "1 ère collège", value: 1 }}
      styles={colourStyles}
    />
  );
};

export default SelectList;
