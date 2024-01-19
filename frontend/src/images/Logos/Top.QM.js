import { useTheme } from "styled-components";

const Top = () => {
  const theme = useTheme();

  const style = {
    width: "2.6rem",
    position: "absolute",
    top: "-2px",
    left: "-2px",
    opacity: 0.6,
    transform : 'rotateZ(92deg)'
  };
  return (
    <svg
      id="Layer_1"
      style={style}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 43.86 39.46"
    >
      <path
        d="M4.18,18.72A21,21,0,0,0,0,19.14v4.33a16.73,16.73,0,0,1,20.91,16h4.22A21,21,0,0,0,4.18,18.72Z"
        transform="translate(0 0)"
        fill={theme.colors.primary}
      />
      <path
        d="M4.18,9.56A30.69,30.69,0,0,0,0,9.85v4.28a25.44,25.44,0,0,1,4.18-.34A25.92,25.92,0,0,1,30.06,39.46h4.23A30.16,30.16,0,0,0,4.18,9.56Z"
        transform="translate(0 0)"
        fill={theme.colors.primary}
      />
      <path
        d="M4.18,0A38.88,38.88,0,0,0,0,.22V4.47a34.35,34.35,0,0,1,4.18-.25A35.48,35.48,0,0,1,39.63,39.46h4.23A39.72,39.72,0,0,0,4.18,0Z"
        transform="translate(0 0)"
        fill={theme.colors.primary}
      />
    </svg>
  );
};

export default Top;
