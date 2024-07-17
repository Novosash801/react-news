import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import styles from './style.module.scss';

const NewsBanner = ({ item }) => {
    return (
        <div className={styles.banner}>
            <div className={styles.wrapper}>
                {item.image ? <img src={item.image} alt='image' className={styles.img} /> : null}
            </div>

            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>
                {formatTimeAgo(item.published)} by {item.author}
            </p>
        </div>
    );
};

export default NewsBanner;
