import { useTheme } from "styled-components";

const OldQstIcon = (props) => {
  const theme = useTheme();
  let color = props.actived ? theme.colors.primary : theme.colors.text;

  const styleObj = {
    height: "3rem",
    width: "3rem",
    opacity:'0.8',
  };

  return (
    <svg
      style={styleObj}
      
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 247.92 292.32"
    >
      <path
        fill={color}
        d="M264.45,241H147a6.52,6.52,0,0,0-6.52,6.52V260.6a6.52,6.52,0,0,0,6.52,6.52H264.45A6.52,6.52,0,0,0,271,260.6V247.55A6.52,6.52,0,0,0,264.45,241ZM94.82,214.88H29.57a6.52,6.52,0,0,0-6.52,6.52v65.25a6.52,6.52,0,0,0,6.52,6.52H94.82a6.52,6.52,0,0,0,6.52-6.52V221.4A6.52,6.52,0,0,0,94.82,214.88Zm-6.53,65.24H36.1V227.93H88.29ZM264.45,149.64H147a6.52,6.52,0,0,0-6.52,6.52v13.05a6.52,6.52,0,0,0,6.52,6.52H264.45a6.52,6.52,0,0,0,6.52-6.52V156.16A6.52,6.52,0,0,0,264.45,149.64Zm-169.63-26H29.57a6.52,6.52,0,0,0-6.52,6.52v65.25a6.52,6.52,0,0,0,6.52,6.52H94.82a6.52,6.52,0,0,0,6.52-6.52V130.11A6.52,6.52,0,0,0,94.82,123.59Zm-6.53,65.24H36.1V136.64H88.29ZM264.45,58.31H147a6.51,6.51,0,0,0-6.52,6.52v13A6.53,6.53,0,0,0,147,84.41H264.45A6.53,6.53,0,0,0,271,77.88v-13A6.51,6.51,0,0,0,264.45,58.31ZM58.91,56.73a6.53,6.53,0,0,0-11.75,5.7l.07.15L60.28,88.66A6.52,6.52,0,0,0,69,91.58a6.4,6.4,0,0,0,2.51-2.22l52.19-78.29a6.52,6.52,0,1,0-10.85-7.23L94,32.2H29.57a6.52,6.52,0,0,0-6.52,6.52V104a6.52,6.52,0,0,0,6.52,6.52H94.82a6.52,6.52,0,0,0,6.52-6.52V52.49l-13,19.57V97.44H36.1V45.25H85.27L66.92,72.78Z"
        transform="translate(-23.05 -0.85)"
      />
    </svg>
  );
};

export default OldQstIcon;
