import React, { useContext } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import styles from './UserOrders.module.css';
import { CardContainer } from "../cards/CardContainer";
import { AppContext }  from '../../contexts/context.js';

export const UserServices = () => {
    const user = useContext(AppContext).user;
    return (
        <>
            <div className={styles.user_info}>
                <Sidebar/>
                <div className={styles.page}>
                <div className={styles.page_title}>Мои услуги</div>
                <CardContainer buttonText='Изменить' userName={`${user.firstName} ${user.lastName}`}/>
                </div>   
            </div>
        </>
    )
}