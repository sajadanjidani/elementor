import styles from './itemDescrip.module.css'

const ItemDescrip = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>ابزارک های اختصاصی</h1>
            <p className={styles.subTitle}>با ابزارک های اختصاصی نسخه پرو المنتور، میتوانید صفحات با کیفیت تری نسبت به سایر صفحه ساز ها ، طراحی و پیاده سازی کنید! با ابزارک های اختصاصی نسخه پرو المنتور، میتوانید صفحات با کیفیت تری نسبت به سایر صفحه ساز ها ، طراحی و پیاده سازی کنید!</p>
            <div className={styles.ulContainer}>
                <div>
                    <ul>
                        <li>تنوع بی‌نظیر ابزارک‌ها</li>
                        <li>سفارشی‌سازی بی‌نهایت</li>
                        <li>کارایی و سرعت بالا</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>سازگاری با سایر افزونه‌ها</li>
                        <li>رابط کاربری آسان و شهودی</li>
                        <li>بهینه‌سازی برای موتورهای جستجو</li>
                    </ul>
                </div>
            </div>
        </div>
    )
} 

export default ItemDescrip