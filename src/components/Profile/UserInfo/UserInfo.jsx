import css from './UserInfo.module.css';
// import ava from './../../../assets/images/avatar1.jpg'
// import banner from './../../../assets/images/banner.jpg'
import nophoto from '../../../assets/images/nophoto.jpg'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus'


const UserInfo = (props) => {
    if (props.userProfile == null) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={css.userInfo}>
            {/* <img alt='banner' className={css.banner} src={props.userProfile.photos.large ?
                props.userProfile.photos.large : banner} /> */}
            <div className={css.user}>
                <div className={css.userAva}>
                    <img alt='ava' src={props.userProfile.photos.small != null ? props.userProfile.photos.small : nophoto} />
                </div>
                <div className={css.description}>
                    <div className={css.name}> {props.userProfile.fullName} </div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
            <div className={css.aboutMe}> {props.userProfile.aboutMe != null ? `Немного обо мне: ${props.userProfile.aboutMe}` : null} </div>
        </div>
    )
}
export default UserInfo