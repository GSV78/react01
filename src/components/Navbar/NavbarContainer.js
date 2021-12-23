import { connect } from 'react-redux';
import NavBar from './Navbar'

let mapStateToProps = (state) => {
    return {
        navPage: state.navPage,
        currentUser: state.profilePage.currentUser,
    }
}

const NavbarContainer = connect(mapStateToProps, ({}))(NavBar)

export default NavbarContainer
