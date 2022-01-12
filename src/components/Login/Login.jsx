import { reduxForm, Field } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import css from './Login.module.css'

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='Имя пользователя'
                    name={'login'}
                    type={'text'}
                    component={Input}
                    validate={[required, maxLength20]}
                />
            </div>
            <div>
                <Field
                    placeholder='Пароль'
                    name={'password'}
                    type='password'
                    component={Input}
                    validate={[required, maxLength20]}
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
        alert('login: ' + formData.login + '; password: ' + formData.password);
    }
    return (
        <div className={css.loginInner}>
            <h1>Вход в систему</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login