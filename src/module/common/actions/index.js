export const ONLOAD = 'ONLOAD';
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';
export const API_NO_RESULTS = 'API_NO_RESULTS';

export function doOnloadAction() {
    // using thunk
    return (dispatch, getState) => {
        window.setTimeout(() => {
            dispatch({
                type: ONLOAD
            });
        }, 2000);

    }
}