import Action from '../components/Actions/actions'
export default function commentsReducer(state = [], action) {
    switch (action.type) {
        case Action.ADD_COMMENTS:
            return action.payload
        case Action.UPDATE_COMMENTS:
            let index = -1, { id } = action.payload
            index = state.findIndex(item => item.id == id)
            return [...state.slice(0, index), action.payload, ...state.slice(index + 1)]
            case Action.DELETE_USER:
                return []
        default:
            return state

    }
}