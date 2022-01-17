import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import { login, logout } from '../../redux/auth-reducer'
import { Navigate } from "react-router-dom"
import css from './Login.module.css'

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder='Имя пользователя'
                    name={'email'}
                    type={'text'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder='Пароль'
                    name={'password'}
                    type='password'
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    type='checkbox'
                    name={'rememberMe'}
                    component={Input}
                />
                запомнить меня
            </div>
            {error ? (<div className={css.formSummaryError}>
                {error}
            </div>) : null}
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <div className={css.loginInner}>
            <h1>Вход в систему</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout })(Login)