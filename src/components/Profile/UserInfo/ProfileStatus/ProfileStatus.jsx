import React from 'react'
import css from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        if (this.props.userId === this.props.currentUserId) {
            this.setState({
                editMode: true
            })
        }
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div className={css.profileStatusInner}>
                {!this.state.editMode
                    ? (<div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Статус не установлен.'}</span>
                    </div>)
                    : (<div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>)
                }
            </div>
        )
    }
}

export default ProfileStatus