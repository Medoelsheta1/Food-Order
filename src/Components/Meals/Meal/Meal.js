import styles from './Meal.module.css'
import Mealform from './Mealform'
import ContextHandler from '../../Context/ContextHandler'

import { useContext } from 'react'
function Meal (props) {
    const CartCtx = useContext(ContextHandler)
    function getTheAmount (amount) {
        const item = {
            id: props.item.id,
            amount: amount,
            name: props.item.name,
            price: props.item.price
        }
        CartCtx.addItem(item)
    }
    return (
        <li className={styles.li}>
            <div className={styles.item}>
                <h3>{props.item.name}</h3>
                <p>{props.item.description}</p>
                <span>${props.item.price}</span>
            </div>
            <div><Mealform onAddItem={getTheAmount} id={props.item.id}/></div>
        </li>
    )
}

export default Meal