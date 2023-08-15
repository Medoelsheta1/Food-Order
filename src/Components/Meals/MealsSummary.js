import styles from './MealsSummary.module.css'

function MealsSummary () {  
    return (
        <>
            <div className={styles.mealsSummary}>
                <h1>Delicious Food, Delivery To You</h1>
                <p>Choose your favourite meals from our board selection of available meals and enjoy a delicious <br />
                    lunch or dinner at home
                </p>
                <p>All our meals are cooked with high-quality ingrediants, just-in-time and of course <br />
                    by expert chefs!
                </p>
            </div>
        </>
    )
}
export default MealsSummary;