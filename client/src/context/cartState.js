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

    const toBase64 = (arr) => {
        return btoa(
            arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
         );
     }

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addCart,
                setInfoJSON,
                toBase64,
                websiteInfo: state.websiteInfo
            }}>
                {props.children}
            </CartContext.Provider>
    )
}

export default CartState;
