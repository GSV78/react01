import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';

const Profile = (props) => {
    return (
        <div className={css.content}>
            <UserInfo userData={props.userData} />
            <MyPosts
                newPostText={props.state.newPostText}
                postsData={props.state.postsData}
                store={props.store}
            />
        </div>
    )
}
export default Profile