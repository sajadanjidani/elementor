import styles from './gadgets.module.css'
import medias from './gadgetsMedia.module.css'
import GadgetsItem from '../gadgetsItem/gadgetsItem'

const Gadgets = () => {

    const itemInformation = [
        {id: 1, title: 'تقویم شمسی', iconhref: 'goGo', bgIconColor: '#C22155', bgHover : '#FF8264'},
        {id: 2, title: 'ویجت آپارات', iconhref: 'goGo', bgIconColor: '#C22155', bgHover : '#FF8264'},
        {id: 3, title: 'ویجت ایرانی', iconhref: 'goGo', bgIconColor: '#4E2465', bgHover : '#7D9CE9'},
        {id: 4, title: 'فونت فارسی', iconhref: 'goGo', bgIconColor: '#C22155', bgHover : '#FF8264'},
        {id: 5, title: 'کد کوتاه', iconhref: 'goGo', bgIconColor: '#C22155', bgHover : '#FF8264'},
        {id: 6, title: 'اسلایدر ها', iconhref: 'goGo', bgIconColor: '#4E2465', bgHover : '#7D9CE9'},
        {id: 7, title: 'ویجت کاروسل', iconhref: 'goGo', bgIconColor: '#C22155', bgHover : '#FF8264'},
        {id: 8, title: 'ویجت فرم', iconhref: 'goGo', bgIconColor: '#4E2465', bgHover : '#7D9CE9'},
        {id: 9, title: 'گردونه', iconhref: 'goGo', bgIconColor: '#4E2465', bgHover : '#7D9CE9'},
        {id: 10, title: 'جست و جو', iconhref: 'goGo', bgIconColor: '#C22155', bgHover : '#FF8264'},
        {id: 11, title: 'لیست قیمت', iconhref: 'goGo', bgIconColor: '#4E2465', bgHover : '#7D9CE9'},
        {id: 12, title: 'تایمر معکوس', iconhref: 'goGo', bgIconColor: '#4E2465', bgHover : '#7D9CE9'}
    ]

    return(
        <div className={styles.container}>
            <div className={styles.titleBox}>
                <h1 className={styles.title}>ابزارک ها</h1>
                <p className={styles.subTitle}>افزونه المنتور پرو در راست چین به صورت یک افزونه کامل برای کاربران ایرانی ارائه شده است .</p>
                <p className={styles.subTitle}>برخی از ویجت ها قابلیت های پرکاربرد:</p>
            </div>
            <div id={medias.ItemContainer} className={styles.ItemContainer}>
                <GadgetsItem {...itemInformation[0]} />
                <GadgetsItem {...itemInformation[1]} />
                <GadgetsItem {...itemInformation[2]} />
                <GadgetsItem {...itemInformation[3]} />
                <GadgetsItem {...itemInformation[4]} />
                <GadgetsItem {...itemInformation[5]} />
                <GadgetsItem {...itemInformation[6]} />
                <GadgetsItem {...itemInformation[7]} />
                <GadgetsItem {...itemInformation[8]} />
                <GadgetsItem {...itemInformation[9]} />
                <GadgetsItem {...itemInformation[10]} />
                <GadgetsItem {...itemInformation[11]} />
            </div>
        </div>
    )
}

export default Gadgets