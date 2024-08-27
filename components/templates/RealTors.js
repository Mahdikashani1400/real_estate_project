import React from 'react'
import styles from "../../styles/real_tors.module.css"

export default function RealTors() {
    return (
        <div className={styles["real-tors"]}>
            <p className={styles["real-tors__tittle"]}>سه مالک برتر</p>
            <div className={styles["real-tors__list"]}>
                <img
                    src="/img/realtor-1.jpeg"
                    alt="real-tors top 1"
                    className={styles["real-tors__img"]}
                />
                <div className={styles["real-tors__details"]}>
                    <h3 className={"u-heading-3  u-heading--white"}>
                        مهدی ایلخانی نسب
                    </h3>
                    <p className={styles["real-tors__text"]}>869 فروش خانه</p>
                </div>

                <img
                    src="/img/realtor-2.jpeg"
                    alt="real-tors top 2"
                    className={styles["real-tors__img"]}
                />
                <div className={styles["real-tors__details"]}>
                    <h3 className={"u-heading-3  u-heading--white"}>کوثر بهشتی</h3>
                    <p className={styles["real-tors__text"]}>243 فروش خانه</p>
                </div>

                <img
                    src="/img/realtor-3.jpeg"
                    alt="real-tors top 3"
                    className={styles["real-tors__img"]}
                />
                <div className={styles["real-tors__details"]}>
                    <h3 className={"u-heading-3  u-heading--white"}>
                        عرشیا احسنی
                    </h3>
                    <p className={styles["real-tors__text"]}>130 فروش خانه</p>
                </div>
            </div>
        </div>
    )
}
