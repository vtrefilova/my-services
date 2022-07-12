import React, { useContext } from 'react';
import { ModalWindow } from './Modal';
import { Card } from "./Card";
import { FullCard } from "./FullCard";
import styles from './styles/CardContainer.module.css';
import { AppContext}  from './App';



export const CardContainer = () => {
    const cards = useContext(AppContext).cards;
    const titleFilter = useContext(AppContext).titleFiler;
    const titleFilteredCards = cards.filter((el) => el.title.toLowerCase().includes(titleFilter.text.toLowerCase()));
    return (
        <div className={styles.card_container}>
            {titleFilteredCards.map((el, i) => (
                <ModalWindow>
                {{ 
                    modalTrigger: <Card  
                                    key={i}
                                    city={el.city}
                                    title={el.title}
                                    price={el.price}
                                    date={el.date}
                                    />,
                    modalContent: <FullCard
                                    key={i}
                                    executor={el.executor}
                                    city={el.city}
                                    title={el.title}
                                    description={el.description}
                                    price={el.price}
                                    date={el.date}
                                    />
                }}
            </ModalWindow>
            ))}
        </div>
    );
}