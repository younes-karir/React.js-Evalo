import { useTheme } from "styled-components";

const TopIcon = () => {

    const theme = useTheme()

  const style = {
    width: "2rem",
    position: "absolute",
    top: "0px",
    opacity: 0.8,
  };

  return (
    <svg
      style={style}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 76.11 50.64"
    >
      <path
        d="M76.11,0a11.55,11.55,0,0,1-3.67,3.32c-9.13,5.21-19-5.49-27.45-.13C35.86,9,41.77,25.35,33.1,30.42c-7.2,4.21-16.31-4.12-23.49-2.85a7.46,7.46,0,0,0-2.8,1.1,7.9,7.9,0,0,0-2.43,2.52C1,36.58,2.69,46,0,50.64V4A4,4,0,0,1,4,0Z"
        fill={theme.colors.primary}
      />
    </svg>
  );
};

export default TopIcon;
