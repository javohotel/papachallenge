import {useState} from "react";
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload, price) => {
        payload.price = price;
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter( (items) => {
                return items.tail != payload.tail;
            })
        })
    }

    return {
        addToCart,
        removeFromCart,
        state
    }
}

export default useInitialState;