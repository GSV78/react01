import { addMessage } from './../../redux/dialogues-reducer';
import { connect } from 'react-redux';
import Dialogues from './Dialogues';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage,
    }
}

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect,
)(Dialogues)