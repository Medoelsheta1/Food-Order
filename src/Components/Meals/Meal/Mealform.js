import styles from './Mealform.module.css';
import Input from '../../UI/Input';
import {useRef} from 'react'
function Mealform (props) {
    const enteredValue = useRef()
    const formHandler = (e) => {
        e.preventDefault()
        const enterednumber = +enteredValue.current.value
        props.onAddItem(enterednumber)
    }
    return (
        <form className={styles.form} onSubmit={formHandler}>
            <Input label={'Amount'} ref={enteredValue} input={{
                id: `amount_${props.id}`,
                min: '1',
                max: '5',
                type: 'number',
                step: '1',
                defaultValue: '1',
                name: 'amount'
            }} />
            <button type='submit'>+ Add</button>
        </form>
    )
}
export default Mealform