import styles from './sectionItem.module.css'

const SectionItem = () => {
    return(
        <div className={styles.container}>
            <div className={styles.iconContainer}></div>
            <h1 className={styles.title}>سرعت بخشیدن به طراحی</h1>
            <p className={styles.subTitle}>با استفاده از قالب‌های از پیش طراحی شده، دیگر نیازی به ساخت هر بخش از سایت از ابتدا نیست.</p>
        </div>
    )
}

export default SectionItem