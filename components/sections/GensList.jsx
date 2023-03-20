import React, {useState} from 'react';
import Image from 'next/image';
import genImg1 from "../../public/img/gens/gensList/1.jpg";
import genImg2 from "../../public/img/gens/gensList/2.jpg";
import genImg3 from "../../public/img/gens/gensList/3.jpg";
import referenceIcon from "../../public/icons/gensList.svg";
import referenceIconUp from '../../public/icons/gensListUp.svg';
import Discount from '../Discount';
import Timer from '../Timer';
import MyButton2 from '../MyButton2';


const GensList = ({width}) => {
    const [openLT3800, setOpenLT3800] = useState(false);
    const [openLT4500, setOpenLT4500] = useState(false);
    const [openLT6500, setOpenLT6500] = useState(false);


    return (
        <section className="gensList">
            <div className="gensList__item">
                <div className="gens__title">
                    <div className="gens__title-value __container">
                        Газово-бензиновий генератор Loutian LT3800
                    </div>
                </div>
                <div className="gens__picture __container">
                    <Image src={genImg1} alt="generator" />
                </div>
                <div className="gens__discount">
                    <Discount
                        lowPrice={9999}
                        price={9999}
                        percent={20}
                    />
                </div>
                <div className="gens__timer">
                    <Timer />
                </div>
                <div className="gens__text">
                    <div className="gens__text-value __container">
                        Це бензеновий генератор, який допоможе отримати
                        Вам додаткове джерело електроенергії для
                        використання у разі проблем із електромережею з
                        різною номінальною потужністю в залежності від
                        ваших потреб. Агрегат впорається з живленням
                        електроприладів для дому, офісу
                    </div>
                </div>
                <div className="gens__reference">
                    <div className="gens__reference-title">
                        <div className="gens__reference-title-value">
                            ХАРАКТЕРИСТИКИ
                        </div>
                        <div className="gens__reference-title-icon">
                            <Image src={referenceIcon} alt="icon" />
                        </div>
                    </div>
                    <div className="gens__reference-row " >
                        <div className="gens__reference-row-border-first __container" >
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Система пуску:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    ручний
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Номінальна потужність:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    2,8 кВт
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Максимальна потужність:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    3 кВт
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Напруга:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    220/12 В
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Тип палива:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    бензин / газ
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Об'єм паливного бака:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    10 л.
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Витрата палива:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    0,7-1 л/год{" "}
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Безперебійна праця без
                                    дозаправлення:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    10-12 годин
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Тип двигуна:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    {" "}
                                    4-тактний Одноциліндровий с
                                    повітряним охолодженням
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Розмір циліндра:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    88 х 64 мм
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Кількість фаз:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    однофазний
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Система AVR:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Кількість розеток:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    220 В: 2 шт
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Датчик палива:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Датчик рівня масла:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Вольтметр:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Форм-фактор:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    пересувний
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Захист від перевантаження DC/AC:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Клас ізоляції:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    В
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Вага:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    38кг
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gens__buy">
                    <MyButton2
                        btnHeight="140px"
                        fontSize={
                            width < 312 ? 15 : width > 505 ? 30 : 18
                        }
                        lineHeight={width > 505 ? 40 : 20}
                    >
                        Замовити зі знижкою
                        <br />
                        LUOTIAN LT3800
                    </MyButton2>
                </div>
            </div>
            <div className="gensList__item">
                <div className="gens__title">
                    <div className="gens__title-value __container">
                        Газово-бензиновий генератор LUOTIAN LT4500
                    </div>
                </div>
                <div className="gens__picture __container">
                    <Image src={genImg2} alt="generator" />
                </div>
                <div className="gens__discount">
                    <Discount
                        lowPrice={9999}
                        price={9999}
                        percent={20}
                    />
                </div>
                <div className="gens__timer">
                    <Timer />
                </div>
                <div className="gens__text">
                    <div className="gens__text-value __container">
                        Це бензеновий генератор, який допоможе отримати
                        Вам додаткове джерело електроенергії для
                        використання у разі проблем із електромережею з
                        різною номінальною потужністю в залежності від
                        ваших потреб. Агрегат впорається з живленням
                        електроприладів для дому, офісу
                    </div>
                </div>
                <div className="gens__reference">
                    <div className="gens__reference-title">
                        <div className="gens__reference-title-value">
                            ХАРАКТЕРИСТИКИ
                        </div>
                        <div className="gens__reference-title-icon">
                            <Image src={referenceIcon} alt="icon" />
                        </div>
                    </div>
                    <div className="gens__reference-row ">
                        <div className="gens__reference-row-border __container">
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Система пуску:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    ручний
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Номінальна потужність:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    4 кВт
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Максимальна потужність:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    4,5 кВт
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Напруга:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    220/12 В
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Тип палива:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    бензин / газ
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Об'єм паливного бака:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    15 л.
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Витрата палива:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    0,7-1 л/год{" "}
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Безперебійна праця без
                                    дозаправлення:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    15-20  годин
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Тип двигуна:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    {" "}
                                    4-тактний Одноциліндровий с
                                    повітряним охолодженням
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Розмір циліндра:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    88 х 64 мм
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Кількість фаз:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    однофазний
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Система AVR:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Кількість розеток:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    220 В: 2 шт
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Датчик палива:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Датчик рівня масла:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Вольтметр:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Форм-фактор:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    пересувний
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Захист від перевантаження DC/AC:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Клас ізоляції:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    В
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Вага:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    42кг
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gens__buy">
                    <MyButton2
                        btnHeight="140px"
                        fontSize={
                            width < 312 ? 15 : width > 505 ? 30 : 18
                        }
                        lineHeight={width > 505 ? 40 : 20}
                    >
                        Замовити зі знижкою
                        <br />
                        LUOTIAN LT4500
                    </MyButton2>
                </div>
            </div>
            <div className="gensList__item">
                <div className="gens__title">
                    <div className="gens__title-value __container">
                        Газово-бензиновий генератор LUOTIAN LT6500
                    </div>
                </div>
                <div className="gens__picture __container">
                    <Image src={genImg3} alt="generator" />
                </div>
                <div className="gens__discount">
                    <Discount
                        lowPrice={9999}
                        price={9999}
                        percent={20}
                    />
                </div>
                <div className="gens__timer">
                    <Timer />
                </div>
                <div className="gens__text">
                    <div className="gens__text-value __container">
                        Це бензеновий генератор, який допоможе отримати
                        Вам додаткове джерело електроенергії для
                        використання у разі проблем із електромережею з
                        різною номінальною потужністю в залежності від
                        ваших потреб. Агрегат впорається з живленням
                        електроприладів для дому, офісу
                    </div>
                </div>
                <div className="gens__reference">
                    <div className="gens__reference-title">
                        <div className="gens__reference-title-value">
                            ХАРАКТЕРИСТИКИ
                        </div>
                        <div className="gens__reference-title-icon">
                            <Image src={referenceIcon} alt="icon" />
                        </div>
                    </div>
                    <div className="gens__reference-row ">
                        <div className="gens__reference-row-border __container" style={{height: "220px"}}>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Система пуску:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    кнопка
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Номінальна потужність:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    6 кВт
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Максимальна потужність:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    6,5 кВт
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Напруга:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    220/12 В
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Тип палива:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    бензин / газ
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Об'єм паливного бака:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    15 л.
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Витрата палива:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    0,7-1 л/год{" "}
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Безперебійна праця без
                                    дозаправлення:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    15-20  годин
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Тип двигуна:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    {" "}
                                    4-тактний Одноциліндровий с
                                    повітряним охолодженням
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Розмір циліндра:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    88 х 64 мм
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Кількість фаз:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    однофазний
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Система AVR:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Кількість розеток:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    220 В: 2 шт
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Датчик палива:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Датчик рівня масла:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Вольтметр:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Форм-фактор:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    пересувний
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Захист від перевантаження DC/AC:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    так
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Клас ізоляції:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    В
                                </div>
                            </div>
                            <div className="gens__reference-dashed"></div>
                            <div className="gens__reference-keyValue">
                                <div className="gens__reference-keyValue-key">
                                    Вага:
                                </div>
                                <div className="gens__reference-keyValue-value">
                                    84кг
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gens__buy">
                    <MyButton2
                        btnHeight="140px"
                        fontSize={
                            width < 312 ? 15 : width > 505 ? 30 : 18
                        }
                        lineHeight={width > 505 ? 40 : 20}
                    >
                        Замовити зі знижкою
                        <br />
                        LUOTIAN LT6500
                    </MyButton2>
                </div>
            </div>
        </section>
    )
}

export default GensList