import React from 'react'
import styles from "../../styles/sidebar.module.css"
import Link from 'next/link'

export default function Sidebar() {
    return (
        <div className={styles["sidebar"]}>
            <input
                type="checkbox"
                name="toggle"
                id="sidebar-toggle"
                className={styles["sidebar__input"]}
            />
            <label for="sidebar-toggle" className={styles["sidebar__label"]}>
                <div className={styles["sidebar__btn"]}></div>
            </label>

            <div className={styles["sidebar__bg"]}></div>
            <ul className={styles["list"]}>
                <li className={styles["list__item"]}>
                    <Link href="/" className={styles["list__link"]}>صفحه اصلی</Link>
                </li>
                <li className={styles["list__item"]}>
                    <Link href="#" className={styles["list__link"]}>ویژگی ها</Link>
                </li>
                <li className={styles["list__item"]}>
                    <Link href="#" className={styles["list__link"]}>نظرات</Link>
                </li>
                <li className={styles["list__item"]}>
                    <Link href="/houses" className={styles["list__link"]}>خانه ها</Link>
                </li>
                <li className={styles["list__item"]}>
                    <Link href="#" className={styles["list__link"]}>گالری</Link>
                </li>
            </ul>
        </div>
    )
}
