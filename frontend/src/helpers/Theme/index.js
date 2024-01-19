import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const colors = {
  black: "#000",
  white: "#fff",
  lightGray1: "#ffffff",
  lightGray2: "#dadada",
  lightGray3: "#bbc4cc",
  gray2: "#cccccc",
  gray3: "#bababa",
  gray4: "#adadad",
  darkGray1: "#c6c6c66e",
  darkGray2: "#292e38",
  darkGray3: "#202124",
  primary: "#0080ff",
  secondary: "#00a572",
};

export const dark = {
  title :"dark",
  colors: {
    background: colors.darkGray2,
    background2: colors.darkGray3,
    background3: colors.darkGray1,
    text: colors.lightGray3,
    text2: "#7f8fa4",
    InputBackground: colors.darkGray1,
    buttonText: colors.darkGray3,
    icons: colors.gray4,
    primary: colors.primary,
    error: "#FF7F7F",
    warning: "#f7c600",
    information: "#2196F3",
    success: "#4CAF50",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

export const light = {
  title :"light",
  colors: {
    background: colors.gray2,
    background2: colors.lightGray1,
    background3: colors.darkGray1,
    text: colors.darkGray2,
    text2: "#5d6b7e",
    InputBackground: "#dcdcdc",
    InputColor: "#00000099",
    icons: colors.gray4,
    primary: colors.primary,
    buttonText: colors.lightGray1,
    error: "#FF7F7F",
    warning: "#f7c600",
    information: "#2196F3",
    success: "#4CAF50",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => {
  const thiming = useSelector((state) => state.theme.lightTheme);
  return (
    <ThemeProvider theme={thiming}>{children}</ThemeProvider>
  );
};

export default Theme;
