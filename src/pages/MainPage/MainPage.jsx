import React, { useEffect } from 'react';
import styles from './style.module.scss';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';

const MainPage = () => {

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const news = await getNews();
                console.log(news);
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews();
    }, []);

    return <main className={styles.header}><NewsBanner/></main>;
};

export default MainPage;
