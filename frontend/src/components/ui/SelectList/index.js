import { useState } from "react";
import Select from "react-select";

const SelectList = (props) => {

  const options = [
    { label: "à choix multiple", value: 1 },
    { label: "à choix simple", value: 2 },
  ];

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      width: "100%",
      fontSize:'.9rem',
      
      
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
      defaultValue={{ label: "à choix multiple", value: 1 }}
      styles={colourStyles}
    />
  );
};

export default SelectList;
