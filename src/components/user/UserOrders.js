import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import styles from './UserOrders.module.css';
import { CardContainer } from "../cards/CardContainer";

export const UserOrders = () => {
    return (
        <>
            <div className={styles.user_info}>
                    <Sidebar/>
                    <div className={styles.page}>
                    <div className={styles.page_title}>Мои заказы</div>
                    <CardContainer buttonText='Отменить' userName='Иван Иванов'/>
                </div>   
            </div>
        </>
    )
}