import React from "react";
import styles from "./styles/Card.module.css"

export const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <div className={styles.card_title}>
                    Уборка квартиры
                </div>
                <div className={styles.card_city}>
                    Нововсибирск
                </div>
            </div>
            <div className={styles.card_body}>
                3000 руб/усл
            </div>
            <div className={styles.card_footer}>
                <div className={styles.card_date}>
                    Опубликованно 01.01.22
                </div>
                <button className={styles.card_button} onClick={(e) => {e.stopPropagation()}}>
                    Заказать
                </button>
            </div>
        </div>
    );
}