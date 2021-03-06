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
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            {
                props.profilePage.userProfile && props.profilePage.userProfile.userId === props.currentUserId
                    ? <MyPosts
                        postsData={props.profilePage.postsData}
                        ava={props.profilePage.userProfile.photos.small}
                        addPost={props.addPost}
                        deletePost={props.deletePost}
                    />
                    : null
            }
        </div>
    )
}

export default Profile