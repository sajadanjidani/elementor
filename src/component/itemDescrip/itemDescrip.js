import styles from './itemDescrip.module.css'

const ItemDescrip = ({title, subTitle, fetch1, fetch2, fetch3, fetch4, fetch5, fetch6}) => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subTitle}>{subTitle}</p>
            <div className={styles.ulContainer}>
                <div>
                    <ul>
                        <li>{fetch1}</li>
                        <li>{fetch2}</li>
                        <li>{fetch3}</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>{fetch4}</li>
                        <li>{fetch5}</li>
                        <li>{fetch6}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
} 

export default ItemDescrip