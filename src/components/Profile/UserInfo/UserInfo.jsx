import css from './UserInfo.module.css';
import ava from './../../../assets/images/avatar1.jpg'
import banner from './../../../assets/images/banner.jpg'


const UserInfo = (props) => {
    return (
        <div className={css.userInfo}>
            <img className={css.banner} src={banner} />
            <div className={css.user}>
                <div className={css.userAva}>
                    <img src={ava} />
                </div>
                <div className={css.description}>
                    <span> {props.userData.userName},  </span>
                    <span> {props.userData.age} года </span>
                </div>
            </div>
        </div>
    )
}
export default UserInfo