import React from 'react'
import styles from "../../../styles/single_house.module.css"
import db from "../../../data/db.json"
import { useRouter } from 'next/router'

export default function HomeDetails() {
    const route = useRouter()
    const houseCode = route.query.code
    const houseData = db.homes.find(house => house.code === houseCode)

    return (
        <>
            <div className={styles["home-details"]}>
                <div className={styles["home-details-top"]}>
                    <div className={styles["home-img"]}>
                        <img src={houseData.img} alt="" />
                    </div>
                    <div className={styles["home-interduce"]}>
                        <div className={styles["home-title"]}>
                            <h1>
                                <span>فروشگاه مجازی ماکسیما</span>
                                <span>{houseData.price}000 تومان</span>
                            </h1>
                            <div className={styles["tags"]}>
                                <span className={`${styles['tag']} ${styles["green-tag"]}`}>ویژه</span>
                                <span className={`${styles['tag']} ${styles["brown-tag"]}`}>برای اجاره</span>
                            </div>
                            <div className="adrress">آدرس : شیراز، میدان ارم</div>
                        </div>
                        <div className={styles["home-review"]}>
                            <div className={styles["home-review-top"]}>
                                <h2>مرور کلی</h2>
                                <p className="">
                                    <span>کد ملک : </span>
                                    <span>{houseCode}</span>
                                </p>
                            </div>
                            <ul className={styles["home-review-bottom"]}>
                                <li>
                                    <span>نوع ملک: </span>
                                    <span>{houseData.title}</span>
                                </li>
                                <li>
                                    <span>اتاق: </span>
                                    <span>{houseData.roomCount}</span>
                                </li>
                                <li>
                                    <span>متراژ: </span>
                                    <span>{houseData.meterage}</span>
                                </li>
                                <li>
                                    <span>سال ساخت: </span>
                                    <span>1402</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles["home-details-bottom"]}>
                    <div className={styles["home-details-description"]}>
                        <p className="">توضیحات</p>
                        <p className="">
                            {houseData.desc}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
