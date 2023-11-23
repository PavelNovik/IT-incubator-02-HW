import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const compare = (a: UserType, b: UserType) => action.payload === 'up' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)

            return [...state].sort(compare)// need to fix
        }
        case 'check': {

            return [...state].filter(u => u.age >= 18) // need to fix
        }
        default:
            return state
    }
}
