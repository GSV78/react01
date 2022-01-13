import React from 'react';
import { connect } from "react-redux";
import Auth from "./Auth";
import { logout } from './../../../redux/auth-reducer'

class AuthAPI extends React.Component {
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

export default connect(mapStateToProps, { logout })(AuthAPI)