import css from './UserInfo.module.css';
// import banner from './../../../assets/images/banner.jpg'
import nophoto from '../../../assets/images/nophoto.jpg'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import { useEffect } from 'react';
import { useState } from 'react';

const UserInfo = (props) => {
    const [inputDisplay, setInputDisplay] = useState(false)

    if (props.userProfile == null) {
        return (
            <Preloader />
        )
    }

    const setAva = () => {
        setInputDisplay(true)
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
            setInputDisplay(false)
        }
    }

    return (
        <div className={css.userInfo}>
            {/* <img alt='banner' className={css.banner} src={props.userProfile.photos.large ?
                props.userProfile.photos.large : banner} /> */}
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
            <div className={css.inputAva}>{props.isOwner && inputDisplay ? <input type='file' onChange={onMainPhotoSelected} /> : null}</div>
            <div className={css.aboutMe}> {props.userProfile.aboutMe != null ? `Немного обо мне: ${props.userProfile.aboutMe}` : null} </div>
        </div>
    )
}
export default UserInfo