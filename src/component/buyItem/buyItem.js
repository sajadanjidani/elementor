import styles from './buyItem.module.css'

const BuyItem = ({title, descript, price, buyBtn}) => {
    return(
        <div className={styles.container}>
            <div className={styles.icon}></div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.descript}>{descript}</p>
            <h1 className={styles.price}>{price}</h1>
            <button className={styles.buyBtn}>{buyBtn}</button>
        </div>
    )
}

export default BuyItem