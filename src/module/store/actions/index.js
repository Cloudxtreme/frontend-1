export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export function hello() {
    return {type: 'hello'};
}

export function loadProduct(slug) {
    // using thunk
    return (dispatch, getState) => {
        window.setTimeout(() => {
            let product = {
                'id': '1234',
                'slug': slug,
                'title': 'Widget',
                'subtitle': 'Product',
                'description': 'Some long description of the widget'
            };
            dispatch({
                type: RECEIVE_PRODUCT,
                product: product
            });
        }, 2000);

    }
}