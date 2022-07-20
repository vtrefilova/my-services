import React, { useContext } from 'react';
import styles from "./styles/Header.module.css";
import { ModalWindow } from './Modal';
import { SignupForm } from './SignupForm';
import { LoginForm } from './Login';
import { HeaderButton } from './HeaderButton';
import { AppContext }  from './App';
import { Link, NavLink } from 'react-router-dom';
import { ServiceForm } from './ServiceForm';

export const Header = () => {
    const isLoggedin = useContext(AppContext).isLoggedin;

    let activeStyle = {
        textDecoration: 'underline'
    }
    
    return (
        <header className={styles.header}>
            <div className={styles.header_group}>
                <Link style={{textDecoration: 'none'}} to='/'><h1 className={styles.header_title}>Мои услуги</h1></Link>
            </div>
            <div className={styles.header_buttons}>
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
                        <NavLink
                            className={styles.link}
                            to="/user_services"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                                Мои услуги
                        </NavLink>
                        <NavLink
                            className={styles.link}
                            to="/user_orders"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                                Мои заказы
                        </NavLink>
                    </div>
                    <NavLink
                        className={styles.link}
                        to="/profile"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                            Василий Пупкин
                    </NavLink>
                </div>
                </>}
            </div>
        </header>
    );
}