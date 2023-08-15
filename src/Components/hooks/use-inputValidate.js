
import { useState } from "react"

function useInput (validFun) {
        
    const [value , setValue] = useState('')
    const [isTouchedValue , setIsTouchedValue] = useState(false)

    let isValueValid = validFun(value)

    const valueInputHandler  = (e) => {
        setIsTouchedValue(true)
        setValue(e.target.value)
        
    }
    const valueblurHandler = () => {
        setIsTouchedValue(true)
    }
    const reset = () => {
        setValue('')
        setIsTouchedValue(false)
    }
    return {
        value: value,
        isValid: isValueValid,
        isTouched: isTouchedValue,
        valueInput: valueInputHandler,
        blurInput: valueblurHandler,
        reset: reset
    }
}

export default useInput