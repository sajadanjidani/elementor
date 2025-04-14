import styles from './gadgets.module.css'

const Gadgets = () => {
    return(
        <div className={styles.container}>
            <div className={styles.titleBox}>
                <h1 className={styles.title}>ابزارک ها</h1>
                <p className={styles.subTitle}>افزونه المنتور پرو در راست چین به صورت یک افزونه کامل برای کاربران ایرانی ارائه شده است .</p>
                <p className={styles.subTitle}>برخی از ویجت ها قابلیت های پرکاربرد:</p>
            </div>
        </div>
    )
}

export default Gadgets