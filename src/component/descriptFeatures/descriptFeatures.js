import styles from './descriptFeatures.module.css'

const DescriptFeatures = ({children}) => {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}  

export default DescriptFeatures