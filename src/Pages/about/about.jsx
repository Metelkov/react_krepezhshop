import React from "react";
import classes from "../about/styles.module.css"

export const AboutPage = () => {
    return (
        <div className={classes.aboutPageWrapper}>
            <div className={classes.aboutPageTopIndent}>
            </div>
            <div className={classes.aboutPageCenter}>
                <div className={classes.aboutPageCenterHeaderText}>
                    <p>О компании</p>
                </div>
                <div className={classes.aboutPageCenterText}>
                    <p>«Крепеж - инструмент» - это сеть оптово-розничных 
                        магазинов крепежа и ручного инструмента в Нижнем Новгороде.
                        Для Вас всегда в наличии и под заказ более 6000 наименований крепежных
                        изделий по самым низким ценам! Любой товар в нашем магазине вы 
                        можете приобрести в розницу, мелким или крупным оптом с 
                        доставкой или самовывозом. Все виды метизов сертифицированы на 
                        территории России и изготовлены по стандартам DIN и ГОСТ.
                    </p>
                </div>
            </div>

            <div className={classes.aboutPageCards}>
                <div className={classes.aboutPageCardsHeader}>
                    <p>Наши преимущества</p>
                </div>
                <div className={classes.aboutPageCards}>

                </div>
            </div>

            <div className={classes.aboutPageBottomText}>
                <div className={classes.aboutPageBottomTextHeader}>
                    <p>Работаем с юридическими и физическими лицами по всей России!</p>
                </div>
                <div className={classes.aboutPageBottomTextText}>
                    <p>Мы работаем по всей России как с ИП, так и с юридическими лицами. 
                       Для получения оптового прайс-листа Вы можете позвонить по 
                       телефону +7 (831) 218-18-08, направить запрос на электронный 
                       адрес или связаться с нами через форму обратной 
                       связи в разделе контакты. Мы всегда открыты для сотрудничества.
                    </p>
                </div>
            </div>
        </div>
    )
};