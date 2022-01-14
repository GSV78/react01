import React, { useEffect, useState } from 'react'
import css from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if (props.userId === props.currentUserId) {
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={css.profileStatusInner}>
            {!editMode
                ? (<div>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || 'Статус не установлен.'}
                    </span>
                </div>)
                : (<div>
                    <input
                        onChange={onStatusChange}
                        value={status}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                    />
                </div>)
            }
        </div>
    )
}

export default ProfileStatusWithHooks



// state = {
//     editMode: false,
//     status: this.props.status
// }

// activateEditMode = () => {
//     debugger
//     if (this.props.userId === this.props.currentUserId) {
//         this.setState({
//             editMode: true
//         })
//     }
// }

// deactivateEditMode = () => {
//     this.setState({
//         editMode: false
//     })
//     this.props.updateStatus(this.state.status)
// }

// onStatusChange = (e) => {
//     this.setState({
//         status: e.currentTarget.value
//     })
// }

// componentDidUpdate(prevProps, prevState) {
//     if (prevProps.status !== this.props.status) {
//         this.setState({
//             status: this.props.status
//         })
//     }
// }
// render() {