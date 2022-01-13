import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';

const Profile = (props) => {
    return (
        <div className={css.content}>
            <UserInfo
                userProfile={props.profilePage.userProfile}
                status={props.profilePage.status}
                updateStatus={props.updateStatus}
                currentUserId={props.currentUserId}
            />
            <MyPosts
                postsData={props.profilePage.postsData}
                addPost={props.addPost}
            />
        </div>
    )
}
export default Profile