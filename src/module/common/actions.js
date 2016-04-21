import { UPDATE_NAME, CHANGE_FORM } from './actionTypes'

export function updateName(name) {
    return {type: UPDATE_NAME, name: name}
}

export function changeForm(form) {
    return {type: CHANGE_FORM, form: form}
}