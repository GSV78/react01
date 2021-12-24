import { addPostActionCreator, updateNewPostTextActionCreator } from './../../redux/Users-reducer'
import { connect } from 'react-redux';
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        UsersPage: state.UsersPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // addPost: () => {
        //     dispatch(addPostActionCreator());
        // },
        // updateNewPostText: (text) => {
        //     dispatch(updateNewPostTextActionCreator(text));
        // }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer