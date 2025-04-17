import styles from './contentDescriptFeatures.module.css'

const ContentDescriptFeatures = ({title , content}) => {
    return(
        <div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.content}>{content}</p>
        </div>
    )
}

export default ContentDescriptFeatures