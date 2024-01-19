import { Container, UI } from "./GlobalLoading.elements";
import ReactDOM from "react-dom";


const Modal = () => {
  return (
    <Container>
      <UI></UI>
    </Container>
  );
};



const GlobalLoading = (props) => {

  
    return ReactDOM.createPortal(
      props.isloading && <Modal />,
      document.getElementById("portal-root")
    );
  };


  export default GlobalLoading;