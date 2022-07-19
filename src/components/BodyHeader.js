import React, { useContext } from "react";
import { Filter } from "./Filter";
import styles from './styles/BodyHeader.module.css'
import { AppContext }  from './App';
import { SearchString } from "./SearchString";


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
                    <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L4 3.29289L6.64645 0.646447C6.84171 0.451184 7.15829 0.451184 7.35355 0.646447C7.54882 0.841709 7.54882 1.15829 7.35355 1.35355L4.70711 4L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L4 4.70711L1.35355 7.35355C1.15829 7.54882 0.841709 7.54882 0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L3.29289 4L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="white"/>
                    </svg>
                    </button>
                </div> :
                null}
                <Filter/>
                </div>
            </div>
        </div>
    );
}