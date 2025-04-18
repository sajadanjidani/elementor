import styles from './commentSlider.module.css'

const CommentSlider = ({userName, comment}) => {

    let fontSizeStyle = {
        fontSize : '16px'
    }

    return(
        <div className={styles.container}>
            <p className={styles.comment} style={fontSizeStyle}>{comment}</p>
            <div className={styles.userBox}>
                <div className={styles.imagebox}></div>
                <p>{userName}</p>
            </div>
        </div>
    )
}

export default CommentSlider