import React from "react";
import styles from './styles/FullCard.module.css'

export const FullCard = ({ title, city, price, date, executor, description, action }) => {
    return (
        <div className={styles.full_card}>
            <div className={styles.full_card_header}>
                <div className={styles.full_card_executor} >
                    {executor}
                </div>
                <div className={styles.full_card_city} >
                    {city}
                </div>
            </div>
            <div className="full-card-body">
                <div className={styles.full_card_title}>
                    {title}
                </div>
                <div className={styles.full_card_description}>
                    {description}
                </div>
                <div className={styles.full_card_price}>
                    {`${price} руб/усл`}
                </div>
            </div>
            <div className={styles.full_card_footer}>
                <div className={styles.full_card_date}>
                    {`Опубликовано ${date.toLocaleDateString('ru-RU')}`}
                </div>
                <button className={styles.full_card_button}>
                    { action }
                </button>
            </div>
        </div>
    );
}