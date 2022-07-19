import React from "react";
import { CardContainer } from "./CardContainer";
import { BodyHeader } from "./BodyHeader";
import styles from './styles/MainPage.module.css'

export const MainPage = () => {
    return (
        <div className={styles.main_page}>
            <BodyHeader/>
            <CardContainer buttonText='Заказать'/>
        </div>
    );
}

