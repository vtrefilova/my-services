import React, { useContext } from 'react';
import styles from "./Header.module.css";
import { ModalWindow } from '../modals/Modal';
import { SignupForm } from '../forms/SignupForm';
import { LoginForm } from '../forms/LoginForm';
import { HeaderButton } from './HeaderButton';
import { AppContext }  from '../../contexts/context.js';
import { NavLink } from 'react-router-dom';
import { ServiceForm } from '../forms/ServiceForm';
import styled from "styled-components";

export const Header = () => {
    const isLoggedin = useContext(AppContext).isLoggedin;

    let activeStyle = {
        textDecoration: 'underline'
    }
    
    return (
        <header className={styles.header}>
            <Logo to='/'>Мои услуги</Logo>
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

const Logo = styled(NavLink)`
display: flex;
flex-shrink: 0;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 23px;
line-height: 28px;
color: #FFFFFF;
margin-left: 45px;
margin-top: 16px;
margin-bottom: 16px;
margin-right: 16px;
text-decoration: none;
&:hover {
    color: #FFFFFF;
    text-decoration: underline;
}
`
