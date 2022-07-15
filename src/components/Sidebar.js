import { Routes, Route, Link} from 'react-router-dom';
import { UserServices } from './UserServices';
import { UserOrders } from './UserOrders';
import styles from './styles/Sidebar.module.css'
import { UserProfile } from './UserProfile';
import { useState } from 'react';
import cn from 'classnames';

export const Sidebar = () => {
    const [ active, setActive ] = useState(null);
    const links = [ {to: '/profile', text: 'Информация о пользователе', id: 0},
                    {to: '/profile/user_orders', text: 'Мои заказы', id: 1},
                    {to: '/profile/user_services', text: 'Мои услуги', id: 2} ]

    return(
        <>
        <aside className={styles.sidebar}>
            {links.map((el) => (
                <div className={styles.link_block} key={el.id}>
                    <Link className={cn({[styles.link]: true, [styles.active]: el.id === active})} to={el.to} onClick={() => {setActive(el.id); console.log(active)}}>{el.text}</Link>
                </div>
            ))}
        </aside>
        <Routes>
            <Route path='/profile/user_orders' element={<UserOrders/>}/>
            <Route path='/profile/user_services' element={<UserServices/>}/>
        </Routes>
        </>
    )
}