import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? css.active : css.disactive}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? css.active : css.disactive}>Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/news" className={navData => navData.isActive ? css.active : css.disactive}>News</NavLink>
            </div >
            <div className={css.item}>
                <NavLink to="/music" className={navData => navData.isActive ? css.active : css.disactive}>Music</NavLink>
            </div >
            <div className={css.item}>
                <NavLink to="/settings" className={navData => navData.isActive ? css.active : css.disactive}>Settings</NavLink>
            </div>
        </nav >
    )
}

export default Navbar