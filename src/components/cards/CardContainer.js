import React, { useContext } from 'react';
import { ModalWindow } from '../modals/Modal';
import { Card } from "./Card";
import { FullCard } from "./FullCard";
import styles from './CardContainer.module.css';
import { AppContext }  from '../../contexts/context.js';

export const CardContainer = ({ userName, buttonText }) => {
    const cards = useContext(AppContext).cards;
    const titleFilter = useContext(AppContext).titleFilter;
    const cityFilter = useContext(AppContext).cityFilter;
    const dateFilter = useContext(AppContext).dateFilter;

    const filteredCards = cards
                            .filter((el) => el.title.toLowerCase().includes(titleFilter.text.toLowerCase()))
                            .filter((el) => el.city.toLowerCase().includes(cityFilter.city.toLowerCase()))
                            .filter((el) => el.executor.toLowerCase().includes(userName.toLowerCase()))
                            .sort((x, y) => {
                                if(dateFilter.activeDateFilter === 'new first') {
                                    return y.date - x.date;
                                }
                                return x.date - y.date;
                            })
        if (!filteredCards.length) {
            return (
                <div className={styles.card_container}>
                    <div className={styles.text}>Таких услуг нет :/</div>
                </div>
        )
        }
return (
        <div className={styles.card_container}>
            {filteredCards.map((el, i) => (
                <ModalWindow key={i}>
                {{ 
                    modalTrigger: <Card
                                    city={el.city}
                                    title={el.title}
                                    price={el.price}
                                    date={el.date}
                                    action={buttonText}
                                    />,
                    modalContent: <FullCard
                                    executor={el.executor}
                                    city={el.city}
                                    title={el.title}
                                    description={el.description}
                                    price={el.price}
                                    date={el.date}
                                    action={buttonText}
                                    />
                }}
            </ModalWindow>
            ))}
        </div>
    );
}

CardContainer.defaultProps = {
    userName: ""
  }