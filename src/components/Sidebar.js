import { NavLink} from 'react-router-dom';
import styles from './styles/Sidebar.module.css'
import { useState } from 'react';
import cn from 'classnames';

export const Sidebar = () => {
    const [ active, setActive ] = useState(null);

    let activeStyle = {
        backgroundColor: '#EBE5FC',
        color: '#7749F8'
    }

    const links = [ {to: '/profile', text: 'Информация о пользователе', id: 0},
                    {to: '/user_orders', text: 'Мои заказы', id: 1},
                    {to: '/user_services', text: 'Мои услуги', id: 2} ]
    return(
        <>
        <aside className={styles.sidebar}>
            {links.map((el) => (
                    <NavLink key={el.id} className={cn({[styles.link]: true, [styles.active]: el.id === active})}
                        to={el.to}
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >{el.text}</NavLink>
            ))}
        </aside>
        </>
    )
}