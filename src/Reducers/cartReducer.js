export const cartReducer = (state , action) => {
    switch(action.type) {
        case "ADD_TO_CART" :
            return {
                ...state ,
                cartItems : state.cartItems.concat({...action.payload})
            }
            // console.log({...action.payload})
            // console.log(state.cartItems)
        default:
            return state;
    }
}