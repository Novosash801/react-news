import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import styles from './style.module.scss';

const NewsListItem = ({ item }) => {
    return (
        <li className={styles.item}>
            <div className={styles.wrapper} style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.extra}>
                    {formatTimeAgo(item.published)} by {item.author}
                </p>
            </div>
        </li>
    );
};

export default NewsListItem;
