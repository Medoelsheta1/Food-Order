import React from "react"
import styles from './Header.module.css'
import HeaderButton from "./HeaderButton"
import mealsImage from '../../asstes/pexels-malidate-van-769289 (1).jpg'
const Header = props => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>ShetaMeals</h1>
                
                <HeaderButton onClick={props.onClick} />
            </header>
            <div className={styles['main-image']}>
                <div>
                    
                </div>
                <img src={mealsImage} alt="meals"/>
            </div>
        </React.Fragment>
    )
}

export default Header