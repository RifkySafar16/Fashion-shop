import * as actionTypes from './actions';

const initialState = {
    product: {
            id:null,
            category_id:null,
            store_id:null,
            name:null,
            price:null,
            description:null,
            image:null,
            active:null
        },
    nameCategory: null
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORING_DROPDOWNCLICK:
            return {
                ...state,
                product: action.payload1,
                nameCategory: action.payload2
            }

    }
    return state;
};

export default reducer;