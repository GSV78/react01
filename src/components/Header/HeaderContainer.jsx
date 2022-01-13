import { connect } from "react-redux";
import { setTime } from "../../redux/header-reducer";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        currentTime: state.headerPage.currentTime,
        currentDate: state.headerPage.currentDate,
    }
}

export default connect(mapStateToProps, { setTime })(Header)