import React from 'react';
import { userAPI } from './../../../api/api';
import { connect } from "react-redux";
import Auth from "./Auth";
import { setAuthUserData } from './../../../redux/auth-reducer'

class AuthAPI extends React.Component {
    componentDidMount() {
        userAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data);
                }
            })
    }
    render() {
        return (
            <Auth {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return (
        { userData: state.auth }
    )
}



export default connect(mapStateToProps, { setAuthUserData })(AuthAPI)