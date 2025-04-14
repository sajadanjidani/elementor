import styles from './gadgetsItem.module.css'

const GadgetsItem = ({title, bgIconColor, bgHover}) => {

    
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
        <div className={styles.itemContainer}>
            <div className={styles.iconContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={iconContainerStyle}></div>
            <h1 className={styles.itemName}>{title}</h1>
        </div>
    )
} 

export default GadgetsItem