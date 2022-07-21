import React from "react";
import { CardContainer } from "../cards/CardContainer";
import { BodyHeader } from "./BodyHeader";
import styles from './MainPage.module.css'

export const MainPage = () => {
    return (
        <div className={styles.main_page}>
            <BodyHeader/>
            <CardContainer buttonText='Заказать'/>
        </div>
    );
}

