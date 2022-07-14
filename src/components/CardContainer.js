import React, { useContext } from 'react';
import { ModalWindow } from './Modal';
import { Card } from "./Card";
import { FullCard } from "./FullCard";
import styles from './styles/CardContainer.module.css';
import { AppContext}  from './App';



export const CardContainer = () => {
    const cards = useContext(AppContext).cards;
    const titleFilter = useContext(AppContext).titleFilter;
    const cityFilter = useContext(AppContext).cityFilter;
    const filteredCards = cards
                                .filter((el) => el.title.toLowerCase().includes(titleFilter.text.toLowerCase()))
                                .filter((el) => el.city.toLowerCase().includes(cityFilter.city.toLowerCase()))
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
                                    />,
                    modalContent: <FullCard
                                    key={i*100}
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