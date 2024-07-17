import { useState } from 'react';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
// import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <div className='container'>
                <MainPage />
            </div>
        </>
    );
}

export default App;
