import { Field } from 'redux-form'
import css from './FormsControls.module.css'

export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={css.formControl + ' ' + (hasError ? css.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={css.formControl + ' ' + (hasError ? css.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, type, component, validators, text) => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            type={type}
            component={component}
            validate={validators}
        />
        {text}
    </div>)