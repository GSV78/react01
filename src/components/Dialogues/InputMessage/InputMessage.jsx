import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import css from './InputMessage.module.css'

const InputMessageForm = (props) => {
    return (
        <form className={css.inputMessage} onSubmit={props.handleSubmit}>
            <Field className={css.textarea} placeholder={'Введите сообщение'} name={'inputMessage'} component={'textarea'} />
            <button className={css.button}>Запостить</button>
        </form>
    )
}

const InputMessageReduxForm = reduxForm({
    form: 'inputMessage',
})(InputMessageForm)

const InputMessage = (props) => {
    let onSubmit = values => {
        props.addMessage(values.inputMessage);
    }
    return (
        <InputMessageReduxForm onSubmit={onSubmit} />
    )
}

export default InputMessage