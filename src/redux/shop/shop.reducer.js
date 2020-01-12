import ShopActionTypes from './shop.types'

const INTIAL_STATE = {
    collections : null,
    isfetching : false,
    errorMsg : undefined
}

const shopReducer = ( state = INTIAL_STATE, action )  =>{
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isfetching : true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isfetching : false
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isfetching : false,
                errorMsg : action.payload
            }

        default:
            return state
    }
}

export default shopReducer;