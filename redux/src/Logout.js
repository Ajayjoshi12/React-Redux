import { useDispatch } from "react-redux"
import { ACTION_LOGOUT } from "./redux/action";

export default function(){

    const actionSender = useDispatch();



    const divStyle = {
        backgroundColor : "red",
        border : "1px solid black",
        padding : "2rem",
        color : "white"
    }

    return(
        <div style={divStyle}>
            <h1>This is Logout</h1>
            <button onClick={()=>{actionSender(ACTION_LOGOUT)}}>Press me to logout</button>  
        </div>
    )

}



