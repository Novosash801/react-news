import { formatDate } from '../../helpers/formatDate';
import styles from './style.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>React News</h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
        </header>
    );
};

export default Header;
