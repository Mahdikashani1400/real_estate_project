import React from 'react'
import styles from "../../styles/header.module.css"
import { useRouter } from 'next/router'

export default function Header() {
    const route = useRouter()
    return (
        <header className={styles["header"]}>
            <img
                src="/img/logo.png"
                alt="Nexter Logo"
                className={styles["header__logo"]}
            />
            <h3 className="u-heading-3 u-heading--light">خانه خودتان:</h3>
            <h1 className="u-heading-1">
                با خرید خانه نهایت آزادی را احساس کنید
            </h1>
            <button className="btn header__btn btn-brown" onClick={() => {
                route.push("/houses")
            }}>
                املاک ما را مشاهده کنید
            </button>

            <p className={styles["seeon__text"]}>دیده می شود در</p>
            <figure className={styles["seeon__box-img"]}>
                <img src="/img/logo-bbc.png" alt="BBC" className={styles["seeon__img"]} />
                <img src="/img/logo-bi.png" alt="BBC" className={styles["seeon__img"]} />
                <img
                    src="/img/logo-forbes.png"
                    alt="BBC"
                    className={styles["seeon__img"]}
                />
                <img
                    src="/img/logo-techcrunch.png"
                    alt="BBC"
                    className={styles["seeon__img"]}
                />
            </figure>
        </header>
    )
}
