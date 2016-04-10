import { UPDATE_NAME } from './actionTypes'

export function updateName(name) {
    return {type: UPDATE_NAME, name: name}
}