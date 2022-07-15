import { Routes, Route, Link} from 'react-router-dom';
import { UserServices } from './UserServices';
import { UserOrders } from './UserOrders';
import styles from './styles/Sidebar.module.css'
import { UserProfile } from './UserProfile';
import { useState } from 'react';

export const Sidebar = () => {
    const [ active, setActive ] = useState(null);

    /*onLinkClick = () => {

    }
    */
    return(
        <>
        <aside className={styles.sidebar}>
            <div className={styles.link_block}>
                <Link className={styles.link} to='/profile'> Информация о пользователе</Link>
            </div>
            <div className={styles.link_block}>
                <Link className={styles.link} to='/profile/user_orders'> Мои заказы </Link>
            </div>
            <div className={styles.link_block}>
                <Link className={styles.link} to='/profile/user_services'> Мои услуги </Link>
            </div>
        </aside>
        <Routes>
            <Route path='/profile/user_orders' element={<UserOrders/>}/>
            <Route path='/profile/user_services' element={<UserServices/>}/>
        </Routes>
        </>
    )
}