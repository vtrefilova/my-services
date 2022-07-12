import React from "react";
import styles from './styles/FullCard.module.css'

export const FullCard = (props) => {
    return (
        <div className={styles.full_card}>
            <div className={styles.full_card_header}>
                <div className={styles.full_card_executor} >
                    Вася Пупкин
                </div>
                <div className={styles.full_card_city} >
                    Новосибирск
                </div>
            </div>
            <div className="full-card-body">
                <div className={styles.full_card_title}>
                    Уборка квартиры
                </div>
                <div className={styles.full_card_description}>
                    Hвытсщцх каызцу= ацуллллллл ывзф сьывлофтмау шеирпщос лвчжыоиашугщшваы ывопузкщжываьсдлы
                </div>
                <div className={styles.full_card_price}>
                    3000 руб/усл
                </div>
            </div>
            <div className={styles.full_card_footer}>
                <div className={styles.full_card_date}>
                    Опубликованно 01.01.22
                </div>
                <button className={styles.full_card_button}>
                    Заказать
                </button>
            </div>
        </div>
    );
}