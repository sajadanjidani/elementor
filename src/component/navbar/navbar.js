import React, { useRef } from 'react';
import styles from './navbar.module.css';
import medias from './navbarMedia.module.css';

const Navbar = () => {
    const subMenuRef = useRef(null);

    const mouseHover = () => {
        if (subMenuRef.current) {
            subMenuRef.current.style.display = "block";
        }
    };

    const mouseUnHover = () => {
        if (subMenuRef.current) {
            subMenuRef.current.style.display = "none";
        }
    };
    return(
        <div>
            <div id={medias.imageSm} className={styles.imageSm}>
                <img className={styles.imageElementPro} src='/image/navbar/elementor-pro-logo.png' alt='elementProImage' /> 
            </div>
            <div id={medias.container} className={styles.container}>
                <div id={medias.hamberMenu} className={styles.hamberMenu}></div>
                <div id={medias.imagebox} className={styles.imagebox}>
                    <img className={styles.imageElementPro} src='/image/navbar/elementor-pro-logo.png' alt='elementProImage' />
                </div>
                <div id={medias.menuList}>
                    <ul className={styles.menuList}>
                        <li>
                            <a href='#'> سوالات متداول </a>
                            </li>
                        <li>
                            <a href='#'> ابزارک ها </a>
                            </li>
                        <li id={styles.hasMenu} onMouseEnter={() => mouseHover()} onMouseLeave={() => mouseUnHover()}>
                            <a href='#'> ویژگی ها </a>
                            {/* has menu */}
                            <div id={styles.subMenu} ref={subMenuRef}>
                                <p>ایکون</p>
                                <p>قالب ها</p>
                            </div>
                            </li>
                        <li>
                            <a href='#'> المنتور راست چین </a>
                            </li>
                        <li>
                            <a href='#'> پشتیبانی </a>
                            </li>
                        <li>
                            <a href='#'> تست افزونه </a>
                            </li>
                    </ul>
                </div>
                <div>
                    <button className={styles.btnBuy}>
                        <span>خرید افزونه</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar