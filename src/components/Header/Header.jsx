import React from 'react';
import AuthContainer from './Auth/AuthContainer';
import css from './Header.module.css';
import logo from './../../assets/images/logo.svg'

class Header extends React.Component {
    componentDidMount() {
        this.props.setTime(new Date().toLocaleTimeString())
    }
    componentDidUpdate() {
        setTimeout(() => {
            this.props.setTime(new Date().toLocaleTimeString())
        }, 1000);
    }
    render() {
        return (
            <header className={css.header} >
                <div className={css.logo}>
                    <img src={logo} />
                    <p>СОЦИУМ</p>
                </div>
                <span className={css.time}>
                    <AuthContainer />
                    {this.props.currentTime}
                </span >
            </header >
        )
    }
}

export default Header;
