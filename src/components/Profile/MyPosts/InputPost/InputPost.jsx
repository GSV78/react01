import { reduxForm, Field } from 'redux-form'
import { maxLengthCreator } from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/FormsControls/FormsControls'
import css from './InputPost.module.css'

const maxLength30 = maxLengthCreator(30)

const InputPostForm = (props) => {
    return (
        <form className={css.inputPost} onSubmit={props.handleSubmit}>
            <Field
                className={css.textarea}
                placeholder={'Введите сообщение'}
                name={'inputPost'}
                component={Textarea}
                validate={[maxLength30]}
            />
            <button className={css.button}>Запостить</button>
        </form>
    )
}

const InputPostReduxForm = reduxForm({
    form: 'inputPost',
})(InputPostForm)

const InputPost = (props) => {
    const onSubmit = (values) => {
        props.addPost(values.inputPost)
        values.inputPost = ''
    }
    return (
        <InputPostReduxForm onSubmit={onSubmit} />
    )
}

export default InputPost