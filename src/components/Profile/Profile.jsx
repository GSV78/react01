import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';

const Profile = () => {
    return (
        <div className={css.content}>
            <img className={css.banner} src="https://avatars.mds.yandex.net/get-zen_doc/3048507/pub_5eb02ef6dadc5a18844cd5fa_5eb02f8f6c15632218123633/scale_1200" />
            <div className={css.user}>
                <div className={css.userAva}>
                    <img src="https://lh3.googleusercontent.com/PjEgzixcJoDC7-aeaVEOX6splcOvnDqlmb-dqtE5LT4kZ2qVSlPhH7SGiXMQWmqKyKs" />
                </div>
                <div className={css.description}>
                    UserName
                </div>
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile