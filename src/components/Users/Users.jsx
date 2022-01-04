import css from './Users.module.css'
import userPhoto from '../../assets/images/nophoto.jpg'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'

const Users = (props) => {
    let pagesCount = props.totalCount / props.pagesSize

    let pages = [];

    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i)
    }

    return (

        <div className={css.usersInner}>
            <div className={css.pagination}>

                {pages.map(page => {
                    return (
                        <span className={props.currentPage === page && css.selectedPage} onClick={() => props.onPageChanged(page)}>
                            {page}
                        </span>
                    )

                })
                }

            </div>
            {

                props.users.map(el => <div key={el.id} className={css.user}>
                    <div className={css.avaAndButton}>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                                <img src={el.photos.small != null ? el.photos.small : userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {el.followed
                                ?
                                <button onClick={() => {
                                    axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "c077ef70-327e-4dad-ac31-5052d1d3b23e"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(el.id)
                                            }
                                        })
                                }}>Отписаться</button>

                                : <button onClick={() => {
                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "c077ef70-327e-4dad-ac31-5052d1d3b23e"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(el.id)
                                            }
                                        })

                                }}>Подписаться</button>}
                        </div>
                    </div>
                    <div className={css.main}>
                        <div>{el.name}</div>
                        <p>{el.status}</p>
                    </div>
                    <div className={css.location}>
                        <div>{'el.location.city'}</div>
                        <div>{'el.location.country'}</div>
                    </div>
                </div>
                )}
            {/* <button className={css.getUsersButton} onClick={this.getUsers}>Загрузить пользователей</button> */}
        </div>
    )
}
export default Users