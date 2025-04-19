import styles from './listFooter.module.css'

const ListFooter = ({li1, li2, li3, li4}) => {
    return(
        <div className={styles.container}>
            <ul>
                <li id={styles.headerList} className={styles.listItem}>{li1}</li>
                <li className={styles.listItem}>{li2}</li>
                <li className={styles.listItem}>{li3}</li>
                <li className={styles.listItem}>{li4}</li>
            </ul>
        </div>
    )
}

export default ListFooter