import styles from './gadgets.module.css'
import GadgetsItem from '../gadgetsItem/gadgetsItem'

const Gadgets = () => {

    return(
        <div className={styles.container}>
            <div className={styles.titleBox}>
                <h1 className={styles.title}>ابزارک ها</h1>
                <p className={styles.subTitle}>افزونه المنتور پرو در راست چین به صورت یک افزونه کامل برای کاربران ایرانی ارائه شده است .</p>
                <p className={styles.subTitle}>برخی از ویجت ها قابلیت های پرکاربرد:</p>
            </div>
            <div className={styles.ItemContainer}>
                
            </div>
        </div>
    )
}

export default Gadgets