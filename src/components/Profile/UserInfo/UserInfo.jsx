import css from './UserInfo.module.css';
import nophoto from '../../../assets/images/nophoto.jpg'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import { useState } from 'react';
import Contact from './Contact';
import ProfileFormReduxForm from './ProfileForm/ProfileForm';

const ProfileData = ({ userProfile, setEditMode, isOwner }) => {
    let contacts = Object.keys(userProfile.contacts).map(ind => {
        if (userProfile.contacts[ind]) {
            return <Contact key={ind} title={ind} value={userProfile.contacts[ind]} />
        }
        return null
    })

    let isContactsNotEmpty = contacts.reduce((prev, cur) => prev || !!cur, false)

    return (
        <>
            <div className={css.aboutMe}> {userProfile.aboutMe != null ? `Немного обо мне: ${userProfile.aboutMe}` : null} </div>
            <div className={css.lookingForAJob}> {userProfile.lookingForAJob ? 'Нахожусь в поиске работы.' : 'В работе не нуждаюсь.'} </div>
            <div className={css.lookingForAJobDescription}> {userProfile.lookingForAJob ? userProfile.lookingForAJobDescription : null} </div>
            <div className={css.contactsTitle}> {isContactsNotEmpty ? 'Мои контакты:' : null} </div>
            <div className={css.contacts}> {isContactsNotEmpty ? contacts : null} </div>
            <div className={css.buttonSetProfileEditMode}>{isOwner ? <button onClick={() => setEditMode(true)}>Отредактировать свой профиль</button> : null}</div>
        </>
    )
}

const UserInfo = (props) => {
    const [InputAva, setInputAva] = useState(false)

    const [EditMode, setEditMode] = useState(false)

    if (props.userProfile == null) {
        return (
            <Preloader />
        )
    }

    const setAva = () => {
        if (props.userProfile.userId === props.currentUserId) {
            setInputAva(!InputAva)
        }
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
            setInputAva(false)
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })
    }

    return (
        <div className={css.userInfo}>
            <div className={css.user}>
                <div className={css.userAva}>
                    <img onDoubleClick={setAva} alt='ava' src={props.userProfile.photos.small != null ? props.userProfile.photos.small : nophoto} />
                </div>
                <div className={css.description}>
                    <div className={css.name}> {props.userProfile.fullName} </div>
                    <ProfileStatusWithHooks
                        status={props.status}
                        updateStatus={props.updateStatus}
                        userId={props.userProfile.userId}
                        currentUserId={props.currentUserId}
                    />
                </div>
            </div>
            <div className={css.inputAva}>{props.isOwner && InputAva ? <input type='file' onChange={onMainPhotoSelected} /> : null}</div>
            {!EditMode
                ? <ProfileData
                    userProfile={props.userProfile}
                    setEditMode={setEditMode}
                    isOwner={props.isOwner}
                />
                : <ProfileFormReduxForm
                    initialValues={props.userProfile}
                    userProfile={props.userProfile}
                    onSubmit={onSubmit}
                />}

        </div>
    )
}

export default UserInfo