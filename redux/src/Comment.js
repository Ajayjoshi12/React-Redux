import { useDispatch } from "react-redux"
import { ACTION_ADD_COMMENT, ACTION_REMOVE_COMMENT } from "./redux/action"

export default function Comment(){


    const actionSender = useDispatch()

    const divStyle = {
        backgroundColor : "yellow",
        border : "1px solid black",
        padding : "2rem",
        color : "black"
    }

    return (
        <div style={divStyle}>
            <h1>This is Comment Management</h1>
            <button onClick={()=>{actionSender(ACTION_ADD_COMMENT)}}>Press me to add comment</button>
            <button onClick={()=>{actionSender(ACTION_REMOVE_COMMENT)}}>Press me to remove comment</button>
        </div>
    )
}