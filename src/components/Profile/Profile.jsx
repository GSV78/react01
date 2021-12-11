import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';

const Profile = () => {
    return (
        <div className={css.content}>
            <UserInfo userName='Сергей' />
            <MyPosts />
        </div>
    )
}
export default Profile