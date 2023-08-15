import styles from './Cart.module.css'
import ReactDOM from 'react-dom'
import { useContext, useState } from 'react'
import CartItem from './CartItem'
import ContextHandler from '../Context/ContextHandler'
import CartForm from './CartForm'
function Cart (props) {
    const [viewForm , setViewForm] = useState(false)
    const [isSubmitting , setIsSubmitting] = useState(false)
    const [didSubmit , setDidSubmit] = useState(false)
    const CartCtx = useContext(ContextHandler)
    const dummy_data = <ul style={{padding: '0'}}>{CartCtx.items.map(meal => {
        return (
                <CartItem item={meal} key={meal.id} />            
        )
    })}</ul> 
    const dataFound = CartCtx.items.length > 0

    const viewFormHandler = () => {
        setViewForm(true)
    }

    const orderDataHandler = (userData) => {
        setIsSubmitting(true)
        fetch("https://foodorder-278d4-default-rtdb.firebaseio.com/orders.json" , {
            method: "POST",
            body: JSON.stringify({
                information: userData,
                order: CartCtx.items
        })})
        setDidSubmit(true)
        setIsSubmitting(false)
        
        CartCtx.clearItems()
    }

    const CartContect = 
    <>
    
                    {dummy_data}
                    <div className={styles.total}>
                        <span className={styles['total-text']}>Total numbers</span>
                        <span className={styles['total-price']}>${CartCtx.totalprice.toFixed(2)}</span>
                    </div>
                    {viewForm && <CartForm onConfirm={orderDataHandler} />}
                    <div className={styles.actions}>
                        {!viewForm && <button onClick={props.onClick} className={styles['close-button']}>close</button> }
                        {dataFound && !viewForm && <button className={styles['order-button']} onClick={viewFormHandler} >order</button>}
                    </div>
    </>

    const CartSending = <p>Sending Order Data...</p>
    const CartSendingDone = <>
        <p>Successfully sent the order ! </p>
        <div className={styles.actions}>
            <button onClick={props.onClick} className={styles['close-button']}>close</button>
            
        </div>
    </>
    const Data =   () => {
        return (
            <>
            
                <div className={styles.overlay} onClick={props.onClick}>
                </div>
                <div className={styles['cart']}>
                    {!isSubmitting && !didSubmit && CartContect}
                    {isSubmitting  && CartSending}
                    {!isSubmitting && didSubmit && CartSendingDone}                    
                </div>

            </>
        )
    }

    return (
        <>
            {ReactDOM.createPortal(<Data /> , document.getElementById('cartOverLay'))}
        </>
    )
}

export default Cart;