import React, { useEffect, useState } from 'react'
import styles from "../../styles/house_box.module.css"
import { useRouter } from 'next/router'
import Link from 'next/link'
import db from "../../data/db.json"
export default function HosesBox() {
    const route = useRouter()
    const basePath = route.asPath.split('/')[1]
    const itemsOnPage = 3
    const [data, setData] = useState([...db.homes])

    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('choise')
    const [page, setPage] = useState(1)

    console.log([...data]);
    console.log([...data].slice(3, 6));
    useEffect(() => {
        setData(prevState => [...db.homes].filter(house => house.title.includes(search)))
    }, [search])
    useEffect(() => {
        switch (sort) {
            case "choise": {
                setData(prevState => [...db.homes].sort((house1, house2) => house1.id - house2.id))
                break

            }
            case "price": {
                setData(prevState => [...db.homes].sort((house1, house2) => house2.price - house1.price))
                break
            }
            case "room": {
                setData(prevState => [...db.homes].sort((house1, house2) => house2.roomCount - house1.roomCount))
                break
            }
            case "address": {
                setData(prevState => [...db.homes].sort((house1, house2) => house1.id - house2.id))
                break
            }
            case "metr": {
                setData(prevState => [...db.homes].sort((house1, house2) => house2.meterage - house1.meterage))
                break
            }

            default:
                break;
        }
    }, [sort])
    return (
        <>
            <div className={styles["home-section"]} id="houses">
                {basePath === "houses" ? <div className={styles["home-filter-search"]}>
                    <div className={styles["home-filter"]}>
                        <select name="" id="" onChange={(e) => {
                            setSort(prevState => e.target.value)
                        }}>
                            <option value="choise" selected>انتخاب کنید</option>
                            <option value="price">بر اساس قیمت</option>
                            <option value="room">بر اساس تعداد اتاق</option>
                            <option value="address">بر اساس ادرس</option>
                            <option value="metr">بر اساس اندازه</option>
                        </select>
                    </div>
                    <div className={styles["home-search"]}>
                        <input type="text" placeholder="جستجو کنید" onChange={(e) => { setSearch(e.target.value) }} />
                    </div>
                </div> : ""}
                <div className={`${styles['homes']} ${basePath === "houses" ? "" : `${styles['single']}`}`}>
                    {
                        data.length ? [...data].slice((page - 1) * itemsOnPage, page * itemsOnPage).map(house => <div className="card">
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
                        </div>) : <>
                            <div className={styles['search-error']}>
                                خانه مد نظر شما یافت نشد ...
                            </div>
                        </>
                    }


                </div>

                {
                    basePath === "houses" ? <ul className={styles["pagination__list"]}>
                        <li className={styles["pagination__item"]} onClick={() => {
                            setPage(prevState => {
                                if (prevState === Math.round([...db.homes].length / itemsOnPage)) {
                                    return 1
                                } else {
                                    return prevState + 1
                                }
                            })
                        }}><span className=""> {"<"} </span></li>

                        {Array.from({ length: Math.round([...db.homes].length / itemsOnPage) }).map((item, index) => <li className={`${index + 1 === page ? styles["active"] : ""} ${styles["pagination__item"]}`} onClick={() => { setPage(prevState => index + 1) }}><span className="">{index + 1}</span></li>)}

                    </ul> : ""
                }
            </div>
        </>
    )
}
