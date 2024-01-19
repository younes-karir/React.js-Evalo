import { Item, Link, PositionContainer, PositionWrapper, Right } from "./Position.elements";

import { useLocation } from "react-router-dom";

const Position = () => {
  const location = useLocation();
  const pathList = location.pathname.split('/');
  let paths=[];

  pathList.map((item,i) => {
    if(item.trim().length  && item.length < 24){
      paths.push({
        id:i,
        value:item
      })
    }
  } )
  return (
    <PositionContainer>
      <PositionWrapper>
        {paths.map((item, i, {length}) => (
          <Item key={item.id}> <Link to={item.value} replace={true} >{item.value} </Link> {(length -1) === i || <Right />}</Item>
        ))}
      </PositionWrapper>
    </PositionContainer>
  );
};

export default Position;
