import styles from './header.module.css'

const Header = () => {
    return(
        <div className={styles.container}>
            <div className={styles.contentSide}></div>
            <div className={styles.gifSide}>
                <div className={styles.gifBox}>
                    <div>
                        <span>با المنتور سایتتو سریعتر بساز</span>
                        <div className={styles.cercle}></div>
                    </div>
                    <h2>سایت حرفه ای، امکانات حرفه ای، المنتور حرفه ای</h2>
                </div>
            </div>
        </div>
    )
}

export default Header