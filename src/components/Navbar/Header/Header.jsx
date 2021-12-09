import css from './Header.module.css';
import logo from './logo.svg'

const Header = () => {
    return (
        <header className={css.header}>
            <img src={logo} />
            СОЦИУМ
        </header>
    );
}
export default Header;
