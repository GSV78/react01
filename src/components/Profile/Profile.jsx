import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';

const Profile = (props) => {

    return (
        <div className={css.content}>
            <UserInfo userProfile={props.profilePage.userProfile} />
            <MyPosts
                newPostText={props.profilePage.newPostText}
                postsData={props.profilePage.postsData}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}
export default Profile