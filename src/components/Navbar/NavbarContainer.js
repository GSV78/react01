import { connect } from 'react-redux';
import NavBar from './Navbar'

let mapStateToProps = (state) => {
    return {
        navPage: state.navPage,
        currentUserId: state.auth.id,
    }
}

const NavbarContainer = connect(mapStateToProps, ({}))(NavBar)

export default NavbarContainer
