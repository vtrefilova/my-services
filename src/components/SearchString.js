import React, { useState } from 'react';
import styles from './styles/SearchString.module.css'

export const SearchString = () => {
    const [text, setText] = useState('');

    return (
        <div className={styles}>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={(e) => {setText(e.target.value)}}
                value={text}
                placeholder="Поиск услуги"
            />
            <button>Найти</button>
        </div>
    );
}