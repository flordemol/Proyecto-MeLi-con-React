import {FETCHING, FETCH_SUCCESS} from './actions/products';

export const initialState = {
    fetching: true,
    products: [],
    categories: [],
    errors: false
}

export function productsReducer (state = initialState, action){
    
    switch(action.type){
        case FETCHING:
            return {
                ...initialState,
                fetching: true
            }
        case FETCH_SUCCESS:
            return {
                fetching: false,
                products: action.payload.data,
                categories: action.payload.categories | [],
                errors: false
            }
        default:
            return state;
    }
}