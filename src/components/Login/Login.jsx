import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input, createField } from '../common/FormsControls/FormsControls'
import { login, logout } from '../../redux/auth-reducer'
import { Navigate } from "react-router-dom"
import css from './Login.module.css'

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Имя пользователя', 'email', 'text', Input, [required])}
            {createField('Пароль', 'password', 'password', Input, [required])}
            {createField(null, 'rememberMe', 'checkbox', Input, [], 'запомнить меня')}
            {captchaUrl
                ? (<div>
                    <img src={captchaUrl} alt='captcha' />
                    {createField('Cимволы с картинки', 'captcha', 'text', Input, [required])}
                </div>)
                : null}
            {
                error ? (<div className={css.formSummaryError}>
                    {error}
                </div>) : null
            }
            <div>
                <button>Войти</button>
            </div>
        </form >
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <div className={css.loginInner}>
            <h1>Вход в систему</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login, logout })(Login)