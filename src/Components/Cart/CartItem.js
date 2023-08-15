import styles from './CartItem.module.css'
import { useContext } from 'react';
import ContextHandler from '../Context/ContextHandler';
function CartItem (props) {
    const Ctx =  useContext(ContextHandler)
    function AddItemHandler () {
        Ctx.addItem({...props.item , amount: 1})
    }
    function RemoveItemHandler () {
        Ctx.removeItem(props.item.id)
    }
    return (
        <li className={styles.item}>
            <div className={styles.details}>
                <h4>{props.item.name}</h4>
                <div className={styles.price}>
                    <span>{props.item.price.toFixed(2)}</span>
                    <h6>x{props.item.amount}</h6>
                </div>
            </div>
            <div className={styles.buttons}>
                <button  onClick={AddItemHandler}>+</button>
                <button onClick={RemoveItemHandler}>-</button>
            </div>
        </li>
    )
}
export default CartItem;

