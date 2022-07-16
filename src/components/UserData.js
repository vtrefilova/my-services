export const UserData = () => {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.page_title}>Личная информация</div>
                <div className={styles.field_container}>
                    <div className={styles.field_title}>Фамилия</div>
                    <div className={styles.field_text}>Пупкин</div>
                </div>
                <div className={styles.field_container}>
                    <div className={styles.field_title}>Имя</div>
                    <div className={styles.field_text}>Василий</div>
                </div>
                <div className={styles.field_container}>
                    <div className={styles.field_title}>Отчество</div>
                    <div className={styles.field_text}>Васильевич</div>
                </div>
            </div>
        </>
    )
}