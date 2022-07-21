import React, { useContext } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import styles from './UserProfile.module.css';
import { AppContext }  from '../../contexts/context.js';

export const UserProfile = () => {
    const user = useContext(AppContext).user;
    return (
        <>
        <div className={styles.user_info}>
            <Sidebar/>
            <div className={styles.page}>
            <div className={styles.page_title}>Личная информация</div>
            <div className={styles.field_container}>
                <div className={styles.field_title }>Фамилия</div>
                <div className={styles.field_text} style={{marginLeft: '4px'}}>{user.lastName}</div>
            </div>
            <div className={styles.field_container}>
                <div className={styles.field_title}>Имя</div>
                <div className={styles.field_text} style={{marginLeft: '52px'}}>{user.firstName}</div>
            </div>
            <div className={styles.field_container}>
                <div className={styles.field_title}>Отчество</div>
                <div className={styles.field_text}>{user.middleName}</div>
            </div>
            </div>
        </div>
        </>
    )
}