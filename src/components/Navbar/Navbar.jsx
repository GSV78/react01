import { NavLink } from 'react-router-dom';
import Header from './Header/Header';
import css from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <Header />
            <div className={css.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? css.active : css.disactive}>Профиль</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? css.active : css.disactive}>Общение</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/news" className={navData => navData.isActive ? css.active : css.disactive}>Новости</NavLink>
            </div >
            <div className={css.item}>
                <NavLink to="/music" className={navData => navData.isActive ? css.active : css.disactive}>Музыка</NavLink>
            </div >
            <hr />
            <div className={css.item}>
                <NavLink to="/settings" className={navData => navData.isActive ? css.active : css.disactive}>Настройки</NavLink>
            </div>
        </nav >
    )
}

export default Navbar