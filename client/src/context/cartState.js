import React, {useReducer} from 'react';
import CartContext from './cartContext';
import cartReducer from './cartReducer';

const CartState = props => {
    const initalState = {
        cart: [],
        websiteInfo: {}
    }

    const [state, dispatch] = useReducer(cartReducer, initalState);

    const addCart = (item) => {
        dispatch({ type: 'ADD_CART', item });
    }

    const setInfoJSON = (websiteInfo) => {
        dispatch({ type: 'SET_INFO_JSON', payload: websiteInfo });
    }

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addCart,
                setInfoJSON,
                websiteInfo: state.websiteInfo
            }}>
                {props.children}
            </CartContext.Provider>
    )
}

export default CartState;
