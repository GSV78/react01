import { connect } from "react-redux";
import { setTimeAC } from "../../redux/header-reducer";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        currentTime: state.headerPage.currentTime,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setTime: (time) => {
            dispatch(setTimeAC(time))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)