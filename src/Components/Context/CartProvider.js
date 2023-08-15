import React , {  useReducer } from "react"
import ContextHandler from "./ContextHandler"
const defaultValues = {
    items: [],
    totalAmount: 0
}

let thetotalAmount;
let updatedItems;
const ReduceFun = (state , action) =>{
    if (action.type === 'ADD') {
        thetotalAmount =  state.totalAmount + action.item.price * action.item.amount;
        const existItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existItem = state.items[existItemIndex]
        if (existItem) {
            let updateItem = {
                ...existItem,
                amount: existItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existItemIndex] = updateItem;
        }else {
            updatedItems = state.items.concat(action.item)
        }
        return {
            items: updatedItems,
            totalAmount: thetotalAmount
        }
    }
        if (action.type === 'Remove') {
            const existCartIndex = state.items.findIndex((item) => item.id === action.id)
            const existCart = state.items[existCartIndex]
            if (existCart.amount === 1) {
                updatedItems = state.items.filter((item) => item.id !== action.id)
            }else {
                const updateCart = {...existCart , amount: existCart.amount - 1}
                updatedItems = [...state.items]
                updatedItems[existCartIndex] = updateCart;

            }
            
            thetotalAmount = state.totalAmount - existCart.price   
            return {
                items: updatedItems,
                totalAmount: thetotalAmount
            }
        }
        if (action.type === 'CLEAR'){
            return defaultValues
        }

        
    
}
function CartProvider (props) {
    
    const [cartState, dispatchCart ] = useReducer(ReduceFun , defaultValues)
    const addItemHandler = (item) => {
        dispatchCart({type: 'ADD' , item: item})
    }
    const removeItemHandler = (id) => {
        dispatchCart({type: 'Remove' , id: id})
    }
    const clearItemsHandler = () => {
        dispatchCart({type: "CLEAR"})
    }
    const catrContext = {
        items: cartState.items , 
        totalprice: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearItems: clearItemsHandler
    }
    return (
        <ContextHandler.Provider value={catrContext}>
            {props.children}
        </ContextHandler.Provider>
    )
}

export default CartProvider;