import styles from './sectionItem.module.css'

const SectionItem = ({title, subTitle, bgIconColor, bgHover}) => {

    const handleMouseEnter = e => {
        let target = e.target;
        target.style.backgroundColor = bgHover
    }

    const handleMouseLeave = e => {
        let target = e.target;
        target.style.backgroundColor = bgIconColor
    }    

    const iconContainerStyle = {
        backgroundColor: bgIconColor,
    }

    return(
        <div className={styles.container}>
            <div className={styles.iconContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={iconContainerStyle}></div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subTitle}>{subTitle}</p>
        </div>
    )
}

export default SectionItem