import React, { useContext } from "react";
import { Filter } from "../filters/Filter";
import styles from './BodyHeader.module.css';
import { SearchString } from "../filters/SearchString";
import { AppContext }  from '../../contexts/context.js';
import img from '/Users/valeriatrefilova/Study/shift-22-front/src/images/times.svg';


export const BodyHeader = () => {
    const cityFilter = useContext(AppContext).cityFilter;
    return (
        <div className={styles.body_header}>
            <div className={styles.body_tagline}>
                Найдите лучшего специалиста для выполнения любой вашей задачи!
            </div>
            <div className={styles.filters}>
                <SearchString/>
                <div className={styles.filter_block}>
                {cityFilter.city ?
                <div className={styles.label}>
                    <div className={styles.label_text}>{cityFilter.city}</div>
                    <button onClick={() => cityFilter.onClick('')} className={styles.label_button}>
                        <img src={img}/>
                    </button>
                </div> :
                null}
                <Filter/>
                </div>
            </div>
        </div>
    );
}