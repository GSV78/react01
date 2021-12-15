import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';

const Profile = (props) => {
    return (
        <div className={css.content}>
            <UserInfo userData={props.userData} />
            <MyPosts postsData={props.state.postsData} />
        </div>
    )
}
export default Profile