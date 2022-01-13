import React from 'react';
import AuthContainer from './Auth/AuthContainer';
import css from './Header.module.css';
import logo from './../../assets/images/logo.svg'

class Header extends React.Component {
    componentDidMount() {
        this.props.setTime(new Date().toLocaleTimeString(), new Date().toLocaleDateString())
    }
    componentDidUpdate() {
        setInterval(() => {
            this.props.setTime(new Date().toLocaleTimeString(), new Date().toLocaleDateString())
        }, 1000);
    }
    render() {
        return (
            <header className={css.header} >
                <div className={css.logo}>
                    <img alt='logo' src={logo} />
                    <p>СОЦИУМ</p>
                </div>
                <div className={css.auth}><AuthContainer /></div>
                <div className={css.time}>
                    <div>{this.props.currentTime}</div>
                    <div>{this.props.currentDate}</div>
                </div >
            </header >
        )
    }
}

export default Header;
