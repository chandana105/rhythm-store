import {useContext , createContext , useReducer} from 'react'
import {cartReducer} from '../Reducers/cartReducer'

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [{cartItems , wishList} , cartDispatch] = useReducer(cartReducer , {cartItems : [] , wishList : []})
    return(
        <CartContext.Provider value={{cartItems , wishList , cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
