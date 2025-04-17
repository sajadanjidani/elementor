import styles from './FeatureCard.module.css'

const FeatureCard = ({title}) => {
    return(
        <div className={styles.container}>
            <div className={styles.iconbox}></div>
            <h1>{title}</h1>
        </div>
    )
}

export default FeatureCard