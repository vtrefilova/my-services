import React, { useState, useContext } from 'react';
import styles from './styles/SearchString.module.css';
import { AppContext}  from './App';;

export const SearchString = () => {
    const [text, setText] = useState('');
    const titleFilter = useContext(AppContext).titleFiler;
    
    return (
        <div className={styles}>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={titleFilter.onChange}
                value={titleFilter.text}
                placeholder="Поиск услуги"
                className={styles.input}
            />
        </div>
    );
}