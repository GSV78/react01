import StoreContex from '../../StoreContex';
import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';

const Profile = (props) => {
    return (
        <div className={css.content}>
            <StoreContex.Consumer>{
                (currentUser) => (<UserInfo userData={currentUser} />)
            }
            </StoreContex.Consumer>
            <MyPosts
                store={props.store}
            // newPostText={props.state.newPostText}
            // postsData={props.state.postsData}
            // dispatch={props.dispatch}
            />
        </div>
    )
}
export default Profile