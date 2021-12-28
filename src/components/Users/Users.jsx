import React from 'react'
import * as axios from 'axios'
import css from './Users.module.css'
import userPhoto from '../../assets/images/avatar4.jpg'

class Users extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagesSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsersList(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagesSize}&page=${page}`)
            .then(response => {
                this.props.setUsersList(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }
    render() {
        let pagesCount = this.props.totalCount / this.props.pagesSize

        let pages = [];
        for (let i = 1; i <= Math.ceil(pagesCount); i++) {
            pages.push(i)
        }
        return (
            <div className={css.usersInner}>
                <div className={css.pagination}>

                    {pages.map(page => {

                        return (
                            <span className={this.props.currentPage === page && css.selectedPage} onClick={() => this.onPageChanged(page)}>
                                {page + ' '}
                            </span>
                        )

                    })
                    }

                </div>
                {
                    this.props.users.map(el => <div key={el.id} className={css.user}>
                        <div className={css.avaAndButton}>
                            <div>
                                <img src={el.photos.small != null ? el.photos.small : userPhoto} />
                            </div>
                            <div>
                                {el.followed
                                    ? <button onClick={() => { this.props.unfollow(el.id) }}>Отписаться</button>
                                    : <button onClick={() => { this.props.follow(el.id) }}>Подписаться</button>}
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
                    </div>)}
                {/* <button className={css.getUsersButton} onClick={this.getUsers}>Загрузить пользователей</button> */}
            </div>
        )
    }
    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios
    //             .get("https://social-network.samuraijs.com/api/1.0/users")
    //             .then(response => {
    //                 this.props.setUsersList(response.data.items)
    //             })
    //     }
    // }
}


export default Users

