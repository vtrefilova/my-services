import React, { useContext } from 'react';
import { ModalWindow } from './Modal';
import { Card } from "./Card";
import { FullCard } from "./FullCard";
import styles from './styles/CardContainer.module.css';
import { AppContext}  from './App';

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
                <ModalWindow>
                {{ 
                    modalTrigger: <Card  
                                    key={i}
                                    city={el.city}
                                    title={el.title}
                                    price={el.price}
                                    date={el.date}
                                    action={buttonText}
                                    />,
                    modalContent: <FullCard
                                    key={i*100}
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