import React, { useState } from 'react';
import { SearchString } from './SearchString';
import styles from "./styles/Header.module.css";
import { ModalWindow } from './Modal';
import { SignupForm } from './SignupForm';
import { LoginForm } from './Login';
import { HeaderButton } from './HeaderButton';



export const Header = () => {
    
    return (
        <header className={styles.Header}>
            <div className={styles.HeaderGroup}>
                <h1 className={styles.HeaderTitle}>Мои услуги</h1>
                <SearchString/>
            </div>
            <div className={styles.HeaderButtons}>
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
            </div>
        </header>
    );
}