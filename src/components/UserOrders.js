import { Sidebar } from "./Sidebar";
import styles from './styles/UserOrders.module.css';
import { CardContainer } from "./CardContainer";

export const UserOrders = () => {
    return (
        <>
            <div className={styles.user_info}>
                <Sidebar/>
                <div className={styles.page}>
                <div className={styles.page_title}>Мои заказы</div>
                <CardContainer buttonText='Отменить' userName='Иван Иванов'/>
                </div>   
            </div>
        </>
    )
}