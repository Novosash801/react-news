import { formatDate } from '../../helpers/formatDate';

const Header = () => {
    return (
        <header>
            <h1>React News</h1>
            <p>{formatDate(new Date())}</p>
        </header>
    );
};

export default Header;
