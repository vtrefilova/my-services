import React, { useState } from 'react';
import { SearchString } from './SearchString';
import styles from "./styles/Header.module.css"



export const Header = (props) => {
    const { children } = props;
    return (
        <header className={styles.Header}>
            <div className={styles.HeaderGroup}>
                <h1 className={styles.HeaderTitle}>Мои услуги</h1>
                <SearchString/>
            </div>
            <div className={styles.HeaderButtons}>
                {children}
            </div>
        </header>
    );
}