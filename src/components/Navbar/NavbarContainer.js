import { connect } from 'react-redux';
import NavBar from './Navbar'

let mapStateToProps = (state) => {
    return {
        navPage: state.navPage,
        currentUser: state.auth.login,
    }
}

const NavbarContainer = connect(mapStateToProps, ({}))(NavBar)

export default NavbarContainer
