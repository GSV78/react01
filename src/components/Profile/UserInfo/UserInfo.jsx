import css from './UserInfo.module.css';
// import banner from './../../../assets/images/banner.jpg'
import nophoto from '../../../assets/images/nophoto.jpg'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import { useState } from 'react';

const Contact = (props) => {
    return (<div>
        <span className={css.contactTitle}> {props.title}:</span>
        <span className={css.contactValue} >{props.value}</span>
    </div>
    )
}

const UserInfo = (props) => {
    const [InputAva, setInputAva] = useState(false)

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

    const SetProfileDetails = () => {
        if (props.userProfile.userId === props.currentUserId) {
            { alert('Yo!') }
        }
    }

    let contactKey = 1
    let contacts = Object.keys(props.userProfile.contacts).map(ind => {
        if (props.userProfile.contacts[ind]) {
            contactKey += 1
            return <Contact key={contactKey} title={ind} value={props.userProfile.contacts[ind]} />
        }
        return null

    }
    )

    let isContactsNotEmpty = contacts.reduce((prev, cur) => prev || !!cur, false)
    debugger
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
            <div className={css.aboutMe}> {props.userProfile.aboutMe != null ? `Немного обо мне: ${props.userProfile.aboutMe}` : null} </div>
            <div className={css.lookingForAJob}> {props.userProfile.lookingForAJob ? 'Нахожусь в поиске работы.' : 'В работе не нуждаюсь.'} </div>
            <div className={css.lookingForAJobDescription}> {props.userProfile.lookingForAJob ? props.userProfile.lookingForAJobDescription : null} </div>
            <div className={css.contactsTitle}> {isContactsNotEmpty ? 'Мои контакты:' : null} </div>
            <div className={css.contacts}> {isContactsNotEmpty ? contacts : null} </div>
            <div className={css.buttonSetProfileDetails}>{props.isOwner ? <button onClick={SetProfileDetails}>Отредактировать свой профиль</button> : null}</div>
            {/* <div className={ } */}
        </div>
    )
}

export default UserInfo