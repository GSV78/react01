import css from './Preloader.module.css'
import preloader from './../../../assets/images/loader.svg'


const Preloader = (props) => {
    return (
        <div className={css.preloader}>
            <img alt='preloader' src={preloader} />
        </div>
    )
}

export default Preloader