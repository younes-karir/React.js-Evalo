import { useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";


const UIHelper = ({ children }) => {
    const LaptopSideBarMenu = useSelector((state) => state.UI.LaptopSideBarMenu);
   
    const springProps = useSpring({
      width : LaptopSideBarMenu ? '14rem' :  '5rem' ,
      config:{
        duration:300,
      }
    });
  
  
    return<Container style={{width:springProps.width}}>{children}</Container>;
  };
  

  export default UIHelper;









const Container = styled(animated.div)`
grid-area: 'menu';
width: 5rem;
/* transition: width .2s ; */
`