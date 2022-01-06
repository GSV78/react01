import React from 'react';
import { connect } from "react-redux";
import Auth from "./Auth";
import { getAuthUserData } from './../../../redux/auth-reducer'

class AuthAPI extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
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



export default connect(mapStateToProps, { getAuthUserData })(AuthAPI)