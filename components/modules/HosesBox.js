import React from 'react'
import styles from "../../styles/house_box.module.css"
import { useRouter } from 'next/router'
import Link from 'next/link'
import db from "../../data/db.json"
export default function HosesBox() {
    const route = useRouter()
    const basePath = route.asPath.split('/')[1]
    const data = db.homes
    return (
        <>
            <div className={styles["home-section"]} id="houses">
                {basePath === "houses" ? <div className={styles["home-filter-search"]}>
                    <div className={styles["home-filter"]}>
                        <select name="" id="">
                            <option value="" selected>انتخاب کنید</option>
                            <option value="">بر اساس قیمت</option>
                            <option value="">بر اساس تعداد اتاق</option>
                            <option value="">بر اساس ادرس</option>
                            <option value="">بر اساس اندازه</option>
                        </select>
                    </div>
                    <div className={styles["home-search"]}>
                        <input type="text" placeholder="جستجو کنید" />
                    </div>
                </div> : ""}
                <div className={`${styles['homes']} ${basePath === "houses" ? "" : `${styles['single']}`}`}>
                    {
                        data.map(house => <div className="card">
                            <img src={house.img} alt={`House ${house.id}`} className="card__img" />
                            <h5 className="card__title">{house.title}</h5>
                            <svg className="card__like">
                                <use href="img/sprite.svg#icon-heart-full"></use>
                            </svg>
                            <div className="card__details">
                                <svg className="card__icon">
                                    <use href="img/sprite.svg#icon-map-pin"></use>
                                </svg>
                                <p className="card__text">مالدیو</p>

                                <svg className="card__icon">
                                    <use
                                        href="img/sprite.svg#icon-profile-male"
                                    ></use>
                                </svg>
                                <p className="card__text">{house.roomCount} اتاق</p>

                                <svg className="card__icon">
                                    <use href="img/sprite.svg#icon-expand"></use>
                                </svg>
                                <p className="card__text">{house.meterage} متر مربع</p>

                                <svg className="card__icon">
                                    <use href="img/sprite.svg#icon-key"></use>
                                </svg>
                                <p className="card__text">{house.price} میلیون تومان</p>
                            </div>

                            <Link

                                // href={
                                //     {
                                //         pathname: "/houses",
                                //         query: {
                                //             code: house.code
                                //         }
                                //     }
                                // }
                                href={`/houses/${house.code}`}
                                className="btn btn-brown btn-card">مشاهده ملک</Link>
                        </div>)
                    }


                </div>

                {
                    basePath === "houses" ? <ul className={styles["pagination__list"]}>
                        <li className={styles["pagination__item"]}><a href="#" className=""> {"<"} </a></li>
                        <li className={styles["pagination__item"]}><a href="#" className="">2</a></li>
                        <li className={`${styles["pagination__item"]} ${styles["active"]}`}><a href="#" className="">1</a></li>
                    </ul> : ""
                }
            </div>
        </>
    )
}
