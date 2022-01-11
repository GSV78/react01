import { reduxForm, Field } from 'redux-form'
import css from './InputPost.module.css'

const InputPostForm = (props) => {
    return (
        <form className={css.inputPost} onSubmit={props.handleSubmit}>
            <Field className={css.textarea} placeholder={'Введите сообщение'} name={'inputPost'} component={'textarea'} />
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
    }
    return (
        <InputPostReduxForm onSubmit={onSubmit} />
    )
}

export default InputPost