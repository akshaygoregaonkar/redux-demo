import Action from '../Actions/actions'
function reducer(state = {}, action) {
    switch (action.type) {
        case Action.ADD_USER:
            const newState = { ...state, userDetails: [...state.userDetails, action.payload] }
            return newState
        case Action.UPDATE_USER:
            return { ...state, userDetails: [...state.userDetails.slice(0, action.payload.index), action.payload.name, ...state.userDetails.splice(action.payload.index + 1)] }
        case Action.ADD_COMMENTS:
            return {...state,commentDetails:action.payload}
        case Action.UPDATE_COMMENT :
            let index=-1,{id}=action.payload
            state.commentDetails.find((item,ind)=>{

                if(item.id==id){
                    index=ind
                    return true
                }
            })
        return{...state,commentDetails:[...state.commentDetails.slice(0,index),action.payload,...state.commentDetails.slice(index+1)]}
        default:
            return state
    }

}
export default reducer