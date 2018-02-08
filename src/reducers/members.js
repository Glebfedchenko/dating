import users from '../data/users'

export default function (state = users, action) {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}