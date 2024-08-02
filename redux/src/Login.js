import { useDispatch } from "react-redux"
import { ACTION_LOGIN } from "./redux/action";

export default function(){

    const actionSender = useDispatch();

    const incrementTotalOnlineUser = ()=>{
        actionSender(ACTION_LOGIN)
    }

    const divStyle = {
        backgroundColor : "blue",
        border : "1px solid black",
        padding : "2rem",
        color : "white"
    }

    return(
        <div style={divStyle}>
            <h1>This is Login</h1>
            <button onClick={()=>{incrementTotalOnlineUser()}}>Press me to login</button>  
        </div>
    )

}



