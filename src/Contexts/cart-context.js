import {useContext , createContext , useReducer} from 'react'
import {cartReducer} from '../Reducers/cartReducer'
import {data} from '../Data'

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [{cartItems , wishList , productData } , cartDispatch] = useReducer(cartReducer , {cartItems : [] , wishList : [] , productData: data })
    return(
        <CartContext.Provider value={{cartItems , wishList  , productData ,  cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
