import NewsListItem from '../NewsListItem/NewsListItem';
import styles from './style.module.scss';

const NewsList = ({ news }) => {
    return (
        <ul className={styles.list}>
            {news.map((item) => {
                return <NewsListItem key={item.id} item={item}/>;
            })}
        </ul>
    );
};

export default NewsList;
