import Action from '../components/Actions/actions'
export default function userReducer(state = [], action) {
    switch (action.type) {
        case Action.ADD_USER_TO_LIST:
            return [...state, action.payload]
        case Action.DELETE_USER:
            return []
        default:
            return state

    }
}