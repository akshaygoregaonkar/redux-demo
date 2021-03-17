import Action from '../Actions/Action';
export default function reducer(state = {}, action) {

    switch (action.type) {
        case Action.ADD_USER:
            return { ...state, userDetails: [...state.userDetails, action.payload] }
        case Action.ADD_COMMENTS:
            return { ...state, CommentDetails: action.payload }

        default:
            return state
    }

}
