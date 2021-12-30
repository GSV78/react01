import css from './UserInfo.module.css';
// import ava from './../../../assets/images/avatar1.jpg'
// import banner from './../../../assets/images/banner.jpg'
import nophoto from '../../../assets/images/nophoto.jpg'
import Preloader from '../../common/Preloader/Preloader';


const UserInfo = (props) => {
    if (props.userProfile == null) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={css.userInfo}>
            <img className={css.banner} src={props.userProfile.photos.large ?
                props.userProfile.photos.large : null} />
            <div className={css.user}>
                <div className={css.userAva}>
                    <img src={props.userProfile.photos.small != null ? props.userProfile.photos.small : nophoto} />
                </div>
                <div className={css.description}>
                    <div> {props.userProfile.fullName} </div>
                    <div> {props.userProfile.aboutMe != null ? `Немного обо мне: ${props.userProfile.aboutMe}` : null} </div>
                </div>
            </div>
        </div>
    )
}
export default UserInfo