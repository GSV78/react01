import { NavLink } from 'react-router-dom'
import css from './../Dialogues.module.css'
import icon from './../icon.svg'

const Dialog = (props) => {
    return (
        <div className={css.dialog}>
            <NavLink to={'/dialogues/' + props.id} className={navData => navData.isActive ? css.active : css.disactive}><img src={icon} />{props.name}</NavLink>
        </div>
    )
}

export default Dialog