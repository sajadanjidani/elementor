import styles from './aboutSection.module.css'
import medias from './aboutSectionMedia.module.css'

const AboutSection = ({children}) => {
    return(
        <div id={medias.continer} className={styles.continer}>
            <div id={medias.itemContainer} className={styles.itemContainer}>
                {children}
            </div>
        </div>
    )
}

export default AboutSection