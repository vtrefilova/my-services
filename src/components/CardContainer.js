import React from "react";
import { ModalWindow } from './Modal';
import { Card } from "./Card";
import { FullCard } from "./FullCard";
import styles from './styles/CardContainer.module.css'

export const CardContainer = () => {
    return (
        <div className='card_container'>
            <ModalWindow>
                {{ modalTrigger: <Card/>,
                    modalContent: <FullCard/>
                }}
            </ModalWindow>
            <ModalWindow>
                {{ modalTrigger: <Card/>,
                    modalContent: <FullCard/>
                }}
            </ModalWindow>
            <ModalWindow>
                {{ modalTrigger: <Card/>,
                    modalContent: <FullCard/>
                }}
            </ModalWindow>
            <ModalWindow>
                {{ modalTrigger: <Card/>,
                    modalContent: <FullCard/>
                }}
            </ModalWindow>
            <ModalWindow>
                {{ modalTrigger: <Card/>,
                    modalContent: <FullCard/>
                }}
            </ModalWindow>
        </div>
    );
}