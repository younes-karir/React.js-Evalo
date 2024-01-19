import { LoadingIcon, LoadingWrapper } from "./Loading.elemets";

const Loading = (props) => {
  return (
    <LoadingWrapper small={props.small}>
      <LoadingIcon small={props.small} />
    </LoadingWrapper>
  );
};

// const Loading = (props) => {



//   return ReactDOM.createPortal(
//     props.isLoading && <LoadingModal />,
//     document.getElementById("portal-root")
//   );
// };



export default Loading;
