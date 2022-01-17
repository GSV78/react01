import css from './Users.module.css'
import userPhoto from '../../assets/images/nophoto.jpg'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

const Users = (props) => {
    return (
        <div className={css.usersInner}>
            <Paginator
                totalCount={props.totalCount}
                pagesSize={props.pagesSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
            />
            {
                props.users.map(el => <div key={el.id} className={css.user}>
                    <div className={css.avaAndButton}>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                                <img alt='ava' src={el.photos.small != null ? el.photos.small : userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {el.followed
                                ?
                                <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                    props.unfollow(el.id)
                                }}>Отписаться</button>

                                : <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                    props.follow(el.id)
                                }}>Подписаться</button>}
                        </div>
                    </div>
                    <div className={css.main}>
                        <div>{el.name}</div>
                        <p>{el.status}</p>
                    </div>
                    {/* <div className={css.location}>
                        <div>{'el.location.city'}</div>
                        <div>{'el.location.country'}</div>
                    </div> */}
                </div>
                )}
            {/* <button className={css.getUsersButton} onClick={this.getUsers}>Загрузить пользователей</button> */}
        </div>
    )
}
export default Users