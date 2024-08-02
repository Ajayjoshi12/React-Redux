import { ACTION_LOGIN,ACTION_LOGOUT,ACTION_ADD_COMMENT,ACTION_REMOVE_COMMENT } from "./action"

const defaultState = {total_online_user:0,total_comments:0}

const reducerOnlineUsers = (state=defaultState, action) => {

    switch (action.type) {


        case ACTION_LOGIN.type:
            return { ...state, total_online_user: state.total_online_user + 1 }

        case ACTION_LOGOUT.type:
            if (state.total_online_user > 0)
                return { ...state, total_online_user: state.total_online_user - 1 }
            else
                return state

        default:
            return state


    }

}

// export {faceBookReducer}



const reducerComments = (state=defaultState, action) => {

    switch (action.type) {


        case ACTION_ADD_COMMENT.type:
            return { ...state, total_comments: state.total_comments + 1 }

        case ACTION_REMOVE_COMMENT.type:
            if (state.total_comments > 0)
                return { ...state, total_comments: state.total_comments - 1 }
            else
                return state

        default:
            return state


    }

}


export {reducerOnlineUsers,reducerComments}





