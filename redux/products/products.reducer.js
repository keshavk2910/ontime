import { addItemToCart } from './products.utils'

const initstate = {
    currentProducts:[],
}

const productsReducer = (state = initstate, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART' :
            return {
                ...state,
                currentProducts: addItemToCart(state.currentProducts, action.payload)
            }
            case 'REMOVE_ITEM_FROM_CART' :
                return {
                    ...state,
                    currentProducts: [
                        ...state.currentProducts.filter(currentProduct => currentProduct.id !== action.payload)
                ]
                }
        default: 
            return state;
    }
}
export default productsReducer;