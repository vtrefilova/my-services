import { Sidebar } from "./Sidebar";
import styles from './styles/UserOrders.module.css';
import { CardContainer } from "./CardContainer";

export const UserServices = () => {
    return (
        <>
            <div className={styles.user_info}>
                <Sidebar/>
                <div className={styles.page}>
                <div className={styles.page_title}>Мои услуги</div>
                <CardContainer buttonText='Изменить' userName='Василий Пупкин'/>
                </div>   
            </div>
        </>
    )
}