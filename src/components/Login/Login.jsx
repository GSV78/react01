import { reduxForm, Field } from 'redux-form'
import css from './Login.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Имя пользователя' name={'login'} type={'text'} component={'input'} />
            </div>
            <div>
                <Field placeholder='Пароль' name={'password'} type='password' component={'input'} />
            </div>
            <div>
                <Field type='checkbox' name={'rememberMe'} component={'input'} /> запомнить меня
            </div>
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
        console.log(formData);
    }
    return (
        <div className={css.loginInner}>
            <h1>Вход в систему</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login