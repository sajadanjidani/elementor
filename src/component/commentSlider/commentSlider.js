import styles from './commentSlider.module.css'

const CommentSlider = ({userName, comment}) => {

    
    return(
        <div className={styles.container}>
            <p className={styles.comment}>{comment}</p>
            <div className={styles.userBox}>
                <div className={styles.imagebox}></div>
                <p>{userName}</p>
            </div>
        </div>
    )
}

export default CommentSlider