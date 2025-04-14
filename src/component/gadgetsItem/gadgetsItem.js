import styles from './gadgetsItem.module.css'

const GadgetsItem = () => {
    return(
        <div className={styles.itemContainer}>
            <div className={styles.iconContainer}></div>
            <h1 className={styles.itemName}>تقویم شمسی</h1>
        </div>
    )
} 

export default GadgetsItem