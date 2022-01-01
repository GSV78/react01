import React from 'react';
import * as axios from 'axios';
import { connect } from "react-redux";
import Auth from "./Auth";
import { setAuthUserData } from './../../../redux/auth-reducer'

class AuthAPI extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data);
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