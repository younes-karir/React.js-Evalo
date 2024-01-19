import { useSelector } from "react-redux";
import { animated, useTransition } from "react-spring";
import styled from 'styled-components'



const ListContainer = ({children}) =>{

    const show = useSelector(state => state.UI.FirstTypeShow);

    const Transition  = useTransition(show,{
        from:{opacity:0 },
        enter:{opacity:1},
        leave:{opacity:0},
    })


    return Transition((style,item) => item ? <Box style={style}>{children}</Box> : '')
}


export default ListContainer;



const Box = styled(animated.div)`
    height: 5rem;
    width:8rem;
    position: absolute;
    background-color: ${props => props.theme.colors.background2};
    border-radius: 6px;
    top:1rem;
    right:-8.5rem;
`;