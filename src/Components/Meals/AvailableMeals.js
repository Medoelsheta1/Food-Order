import { useEffect, useState } from 'react'
import styles from  './AvailableMeals.module.css'
import Meal from './Meal/Meal'

const AvailableMeals = () => {
    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [Error , setError] = useState(null)
useEffect(() => {
    fetch("https://foodorder-278d4-default-rtdb.firebaseio.com/meals.json").then((res) => {
        if(!res.ok) {
            throw new Error("somthing went wrong!")
        }
        return res.json()
    }).then((alldata) => {
        const arrayOfData = []
        
        for (let key in alldata) {
            arrayOfData.push({
                id: alldata[key].id,
                name: alldata[key].name,
                description: alldata[key].description,
                price: alldata[key].price     
            })
        }
        setData(arrayOfData)
        setIsLoading(false)
        // console.log(alldata)
    }).catch((error)=>{
        setIsLoading(false)
        setError(error.message)
    })
} , [Error] )
    
    if(isLoading) {
        return <div className={styles.meals}>
            <p className={styles.loadingMsg}>Loading...</p>
        </div>
    }
    if (Error) {
        return <div className={styles.meals}>
            <p className={styles.errorMessage}>{Error}</p>
        </div>
    }

    return (
        <div className={styles.meals}>
            <ul>
                { 
                    data.map((meal) => {
                        return (
                            <Meal key={meal.id} item={meal} />
                        )
                    })                
                    
                }
            </ul>
        </div>
    )
            }


export default AvailableMeals;