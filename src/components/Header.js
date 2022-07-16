import React, { useState, useContext } from 'react';
import { SearchString } from './SearchString';
import styles from "./styles/Header.module.css";
import { ModalWindow } from './Modal';
import { SignupForm } from './SignupForm';
import { LoginForm } from './Login';
import { HeaderButton } from './HeaderButton';
import { AppContext }  from './App';
import { Link } from 'react-router-dom';
import { ServiceForm } from './ServiceForm';

export const Header = () => {
    const isLoggedin = useContext(AppContext).isLoggedin;
    
    return (
        <header className={styles.Header}>
            <div className={styles.HeaderGroup}>
                <Link style={{textDecoration: 'none'}} to='/'><h1 className={styles.HeaderTitle}>Мои услуги</h1></Link>
                <SearchString/>
            </div>
            <div className={styles.HeaderButtons}>
                {!isLoggedin ? 
                <>
                <ModalWindow text='Регистрация'>
                {{ modalTrigger:
                    <HeaderButton key='modalTrigger' className='App-header-button' text='Регистрация' />,
                    modalContent: <SignupForm key='modalContent'/>
                }}
                </ModalWindow>
                <ModalWindow text='Вход'>
                {{ modalTrigger:
                    <HeaderButton key='modalTrigger' className='App-header-button' text='Вход' />,
                    modalContent: <LoginForm key='modalContent'/>
                }}
                </ModalWindow>
                </> :
                <>
                <div className={styles.button_group_2}>
                    <div className={styles.button_group_1}>
                        <ModalWindow text='Создать услугу'>
                        {{ modalTrigger:
                            <HeaderButton key='modalTrigger' className='App-header-button' text='Создать услугу' />,
                            modalContent: <ServiceForm key='modalContent'/>
                        }}
                        </ModalWindow>
                        <Link className={styles.link} to="/profile/user_services">Мои услуги</Link>
                        <Link className={styles.link} to="/profile/user_orders">Мои заказы</Link>
                    </div>
                    <Link  className={styles.link} to="/profile">Василий Пупкин</Link>
                </div>
                </>}
            </div>
        </header>
    );
}