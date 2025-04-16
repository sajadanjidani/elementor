import styles from './aboutSection.module.css'

const AboutSection = ({children}) => {
    return(
        <div className={styles.continer}>
            <div className={styles.itemContainer}>
                {children}
            </div>
        </div>
    )
}

export default AboutSection