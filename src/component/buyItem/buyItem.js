import styles from './buyItem.module.css'

const BuyItem = () => {
    return(
        <div className={styles.container}>
            <div className={styles.icon}></div>
            <h1 className={styles.title}>نسخه انگلیسی</h1>
            <p className={styles.descript}>می توانید افزونه را از سایت اصلی المنتور تنها با لایسنس یکساله خریداری کنید.</p>
            <h1 className={styles.price}>مبلغ:59 دلار</h1>
            <button className={styles.buyBtn}>خرید از سایت المنتور</button>
        </div>
    )
}

export default BuyItem