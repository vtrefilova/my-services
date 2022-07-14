import React, { useState, useContext } from 'react';
import styles from './styles/SearchString.module.css';
import { AppContext }  from './App';

export const SearchString = () => {
    const [text, setText] = useState('');
    const titleFilter = useContext(AppContext).titleFilter;
    
    return (
        <div className={styles}>
            <input
                type="text"
                onChange={titleFilter.onChange}
                value={titleFilter.text}
                placeholder="Поиск услуги"
                className={styles.input}
            />
        </div>
    );
}