import { useSelector } from "react-redux"

export default function(){

    const totalOnlineUsers = useSelector((state)=>{return state.reducerOnlineUsers.total_online_user})

    const totalComments = useSelector((state)=>{return state.reducerComments.total_comments})

    const divStyle = {
        backgroundColor : "black",
        border : "1px solid black",
        padding : "2rem",
        color : "white"
    }

    return(
        <div style={divStyle}>
            <h1>This is Admin</h1> 
            <p>Online Users : {totalOnlineUsers}</p>
            <p>Comments : {totalComments}</p>

        </div>
    )

}







