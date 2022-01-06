import { addMessage, updateNewMessageText } from './../../redux/dialogues-reducer';
import { connect } from 'react-redux';
import Dialogues from './Dialogues';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage,
    }
}

// compose(
//     connect(mapStateToProps, { addMessage, updateNewMessageText }),
//     withAuthRedirect,
// )(Dialogues)

// let AuthRedirectComponent = withAuthRedirect(Dialogues)


// const DialoguesContainer = connect(mapStateToProps, { addMessage, updateNewMessageText })(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, { addMessage, updateNewMessageText }),
    withAuthRedirect,
)(Dialogues)