import React from "react";
import styles from "./styles/Card.module.css";

export const Card = ({ handleModal, title, city, price, date, action } ) => {
    const onCardClick = () => {
        if (handleModal) {
            handleModal()
        }
    }

    return (
        <div className={styles.card} onClick={onCardClick}>
            <div className={styles.card_header}>
                <div className={styles.card_title}>
                    {title}
                </div>
                <div className={styles.card_city}>
                    {city}
                </div>
            </div>
            <div className={styles.card_body}>
                {`${price} руб/усл`}
            </div>
            <div className={styles.card_footer}>
                <div className={styles.card_date}>
                    {date.toLocaleDateString('ru-RU')}
                </div>
                <button className={styles.card_button} onClick={(e) => {e.stopPropagation()}}>
                    {action}
                </button>
            </div>
        </div>
    );
}