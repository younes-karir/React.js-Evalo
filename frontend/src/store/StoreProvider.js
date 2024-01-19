import { Provider } from "react-redux";
import store from "./Store";



const StoreProvider = (props) =>{

    return <Provider store = {store}>{props.children}</Provider>
}

export default StoreProvider;