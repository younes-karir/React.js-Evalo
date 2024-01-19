import { useTheme } from "styled-components";

const BottomIcon = () => {
  const theme = useTheme();

  const style = {
    width: "4rem",
    position: "absolute",
    bottom: "0px",
    right: "0px",
    opacity: 0.8,
  };
  return (
    <svg
      style={style}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 101.68 58.6"
    >
      <path
        d="M101.68,0V54.6a4,4,0,0,1-4,4H0a11.69,11.69,0,0,1,3.68-3.28c9.13-5.21,19.05,5.49,27.45.13C40.26,49.63,34.35,33.29,43,28.22c7.2-4.21,16.31,4.12,23.49,2.85a7.46,7.46,0,0,0,2.8-1.1,7.9,7.9,0,0,0,2.43-2.52c4-6.46.83-18.7,6.54-21.57,5-2.53,11.52,4.91,16.84,5.41a4.63,4.63,0,0,0,2.78-.52,5.54,5.54,0,0,0,2.47-3.11A29.78,29.78,0,0,0,101.68,0Z"
        fill={theme.colors.primary}
      />
    </svg>
  );
};


export default BottomIcon;
