import React, { useContext } from 'react';
import styles from './SearchString.module.css';
import { AppContext }  from '../../contexts/context.js';

export const SearchString = () => {
    const titleFilter = useContext(AppContext).titleFilter;
    
    return (
        <div className='search_string'>
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