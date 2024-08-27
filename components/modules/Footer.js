import React from 'react'
import styles from "../../styles/footer.module.css"

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
            <ul className={styles["nav"]}>
                <li className={styles["nav__item"]}>
                    <a href="#" className={styles["nav__link"]}
                    >خانه رویایی خود را پیدا کنید</a
                    >
                </li>
                <li className={styles["nav__item"]}>
                    <a href="#" className={styles["nav__link"]}>درخواست پروپوزال</a>
                </li>
                <li className={styles["nav__item"]}>
                    <a href="#" className={styles["nav__link"]}>برنامه اجاره خانه ها</a>
                </li>
                <li className={styles["nav__item"]}>
                    <a href="#" className={styles["nav__link"]}>با ما تماس بگیرید</a>
                </li>
                <li className={styles["nav__item"]}>
                    <a href="#" className={styles["nav__link"]}>ملک خود را ارسال کنید</a>
                </li>
                <li className={styles["nav__item"]}>
                    <a href="#" className={styles["nav__link"]}>با ما کار کنید</a>
                </li>
            </ul>

            <p className={styles["copyright"]}>
                &copy; حقوق مادی معنوی این سایت برای
                <strong className={styles["copyright__name"]}>مهدی ایلخانی نسب</strong>
                محفوظ میباشد
            </p>
        </footer>
    )
}
