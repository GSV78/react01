import css from './../UserInfo.module.css'
import { createField, Input, Textarea } from './../../../common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form'

const ProfileForm = ({ handleSubmit, userProfile, error }) => {
    let contacts = Object.keys(userProfile.contacts).map(ind => {
        return (<div key={ind}>
            <span className={css.contactTitle}> {ind} </span>
            {createField(ind, 'contacts.' + ind, 'text', Input, [])}
        </div>)
    })
    return (
        <form className={css.profileFormInner} onSubmit={handleSubmit}>
            <div className={css.fullName}>
                <b>Твоё полное имя: </b>{createField('Имя', 'fullName', 'text', Input, [])}
            </div>
            <div className={css.aboutMe}>
                <b>Расскажи о cебе: </b>{createField('О себе', 'aboutMe', 'text', Textarea, [])}
            </div>
            <div className={css.lookingForAJob}>
                <b>Ищешь работу? </b>{createField(null, 'lookingForAJob', 'checkbox', Input, [], 'да, ищу')}
            </div>
            <div className={css.lookingForAJobDescription}>
                <b>Какую работу ты ищешь? </b>{createField('Твои профессиональные навыки', 'lookingForAJobDescription', 'text', Textarea, [])} {userProfile.lookingForAJobDescription}
            </div>
            <div className={css.contactsTitle}>Твои контакты:</div>
            <div className={css.contacts}> {contacts} </div>
            <div className={css.buttonSetProfileEditMode}><button>Сохранить свой профиль</button></div>
            {error
                ? (<div className={css.formSummaryError}>
                    {error}
                </div>)
                : null
            }
        </form>
    )
}

const ProfileFormReduxForm = reduxForm({ form: 'profile' })(ProfileForm)

export default ProfileFormReduxForm