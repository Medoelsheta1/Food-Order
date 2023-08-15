import useInput from "../hooks/use-inputValidate"
import styles from './CartForm.module.css'
function CartForm (props) {

    // console.log(Ctx.items)
    const {
        value: name,
        isTouched: isNameTouched,
        isValid: isNameValid,
        valueInput: nameInputHandler,
        blurInput: nameBLurHandler,
        reset: nameReset
    } = useInput(value => value.trim() !== '')
    const {
        value: street,
        isTouched: isStreetTouched,
        isValid: isStreetValid,
        valueInput: streetInputHandler,
        blurInput: streetBLurHandler,
        reset: streetReset
    } = useInput(value => value.trim() !== '')
    const {
        value: postCode,
        isTouched: ispostCodeTouched,
        isValid: ispostCodeValid,
        valueInput: postCodeInputHandler,
        blurInput: postCodeBLurHandler,
        reset: postCodeReset
    } = useInput(value => value.length  >= 6)
    const {
        value: city,
        isTouched: iscityTouched,
        isValid: iscityValid,
        valueInput: cityInputHandler,
        blurInput: cityBLurHandler,
        reset: cityReset
    } = useInput(value => value.trim() !== '')
    
    
    let formValidate = false
    if (isNameValid && isStreetValid && ispostCodeValid && iscityValid) {
        formValidate = true
    }


    const formSubmitHandler = (e) => {
        e.preventDefault()
        if(!formValidate){
            return;
        }
        props.onConfirm({
                    name: name,
                    city: city,
                    street: street,
                    postCode: postCode
                })
        nameReset()
        streetReset()
        postCodeReset()
        cityReset()
    }

    let nameforClass = !isNameValid && isNameTouched ? styles.notValid : ""
    let streetforClass = !isStreetValid && isStreetTouched ? styles.notValid : ""
    let postCodeforClass = !ispostCodeValid && ispostCodeTouched ? styles.notValid : ""
    let cityforClass = !iscityValid && iscityTouched ? styles.notValid : ""

    return (
        <form onSubmit={formSubmitHandler} className={styles.form}>
            <label htmlFor="name">Your Name</label>
            <input className={nameforClass}  value={name} id="name" type="text" onChange={nameInputHandler} onBlur={nameBLurHandler} />
            {!isNameValid && isNameTouched && <p className={styles.warningMsg}>Please entered a valid Name</p>}

            <label htmlFor="street">Street</label>
            <input className={streetforClass} value={street} onChange={streetInputHandler} onBlur={streetBLurHandler} type="text" id="street" />
            {!isStreetValid && isStreetTouched && <p className={styles.warningMsg}>Please entered a valid street</p>}

            <label htmlFor="postCode">Postal Code</label>
            <input onBlur={postCodeBLurHandler} onChange={postCodeInputHandler} value={postCode} className={postCodeforClass} type="text" id="postCode" />
            {!ispostCodeValid && ispostCodeTouched && <p className={styles.warningMsg}>it must be 6 digit</p>}

            <label htmlFor="city">City</label>
            <input onBlur={cityBLurHandler} onChange={cityInputHandler} value={city} className={cityforClass} type="text" id="city" />
            {!iscityValid && iscityTouched && <p className={styles.warningMsg}>Please entered a valid city</p>}

            <div className={styles.buttons}>
                <button onClick={props.onClick} className={styles['close-button']}>close</button>
                <button type="submit" disabled={!formValidate} className={styles['confirm-button']}>confirm</button>
            </div>

        </form>
    )

}
export default CartForm