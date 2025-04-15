import styles from './header.module.css'
import medias from './headerMedia.module.css'

const Header = () => {
    return(
        <div id={medias.container} className={styles.container}>
            <div className={styles.contentSide}>
                <div className={styles.titleBox}>
                    <h1 id={medias.title} className={styles.title}>
                        <span>افزونه المنتـــور پـــرو</span>
                        <div className={styles.acsstoreBg}></div>    
                    </h1>
                    <p className={styles.subTitle}>بدون کد نویسی! باورت میشه ؟</p>
                </div>
                <p id={medias.subject} className={styles.subject}>ارائه اختصاصی افزونه المنتور پرو در راست چین، مختص کاربران ایرانی همراه با پکیج کامل ماژول های ایرانی</p>
                <div id={medias.featuresBox} className={styles.featuresBox}>
                    <span>تقویم شمسی</span>
                    <span>درون ریزی قالب ها</span>
                    <span>فونت های فارسی</span>
                </div>
                <div id={medias.btnBox} className={styles.btnBox}>
                    <button>خرید افزونه المنتور پرو</button>
                    <button>تست انلاین صفحه ساز</button>
                </div>
            </div>
            <div className={styles.gifSide}>
                <div id={medias.gifBox} className={styles.gifBox}>
                    <div>
                        <span id={medias.titleGifBox}>با المنتور سایتتو سریعتر بساز</span>
                        <div id={medias.cercle} className={styles.cercle}></div>
                    </div>
                    <h2 id={medias.subTitleGifBox}>سایت حرفه ای، امکانات حرفه ای، المنتور حرفه ای</h2>
                </div>
            </div>
        </div>
    )
}

export default Header