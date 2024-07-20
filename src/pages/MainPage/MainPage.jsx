import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton.jsx/Skeleton';

const MainPage = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await getNews();
                setNews(res.news);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews();
    }, []);

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton type={'banner'} count={1} />
            )}
            {!isLoading ? <NewsList news={news} /> : <Skeleton type={'item'} count={10} />}
        </main>
    );
};

export default MainPage;
