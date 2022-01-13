import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import css from './InputMessage.module.css'
import { maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength50 = maxLengthCreator(50)

const InputMessageForm = (props) => {
    return (
        <form className={css.inputMessage} onSubmit={props.handleSubmit}>
            <Field
                className={css.textarea}
                placeholder={'Введите сообщение'}
                name={'inputMessage'}
                component={Textarea}
                validate={[maxLength50]}
            />
            <button className={css.button}>Отправить</button>
        </form>
    )
}

const InputMessageReduxForm = reduxForm({
    form: 'inputMessage',
})(InputMessageForm)

const InputMessage = (props) => {
    let onSubmit = values => {
        props.addMessage(values.inputMessage);
        values.inputMessage = ''
    }
    return (
        <InputMessageReduxForm onSubmit={onSubmit} />
    )
}

export default InputMessage