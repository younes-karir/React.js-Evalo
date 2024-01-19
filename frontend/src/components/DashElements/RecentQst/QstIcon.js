import { useTheme } from "styled-components";

const QstIcon = (props) => {
  const theme = useTheme();
  let color = theme.colors.primary;

  const styleObj = {
    height: "1.5rem",
    width: "1.5rem",
  };

  return (
    <svg
      id="Capa_1"
      style={styleObj}
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260.27 274.3"
    >
      <path
        d="M84.77,84H192.46c2.17,0,3.79-1.4,3.79-3V63c0-1.7-1.62-3-3.79-3H84.77C82.6,60,81,61.29,81,63V81C81,82.69,82.6,84,84.77,84Z"
        transform="translate(-31.86 -9.05)"
        fill={color}
      />
      <path
        d="M128.93,111.15a2.92,2.92,0,0,0-3-3H84a2.92,2.92,0,0,0-3,3v18a2.92,2.92,0,0,0,3,3h42a3,3,0,0,0,3-3Z"
        transform="translate(-31.86 -9.05)"
        fill={color}
      />
      <path
        d="M273.73,150.15A82.27,82.27,0,0,0,245.36,128V19.05a10,10,0,0,0-10-10H41.86a10,10,0,0,0-10,10v233.5a10,10,0,0,0,10,10H156.18a81.57,81.57,0,0,0,117.55-112.4ZM55.86,238.55V33.05h165.6v87.81a84.65,84.65,0,0,0-10.93-.71,81.53,81.53,0,0,0-72.79,118.4Zm154.67,20.8a57.64,57.64,0,0,1-45.32-22,55.78,55.78,0,0,1-4.78-7.1,57.66,57.66,0,0,1,50.1-86.1,62.32,62.32,0,0,1,12.2,1.3,56.9,56.9,0,0,1,22.63,10.49,57.55,57.55,0,0,1-34.83,103.41Z"
        transform="translate(-31.86 -9.05)"
        fill={color}
      />
      <path
        d="M233.51,198.39h-14.3v-29.3a5,5,0,0,0-5-5h-11a5,5,0,0,0-5,5v45.3a5,5,0,0,0,5,5h30.3a5,5,0,0,0,5-5v-11A5,5,0,0,0,233.51,198.39Z"
        transform="translate(-31.86 -9.05)"
        fill={color}
      />
    </svg>
  );
};

export default QstIcon;
