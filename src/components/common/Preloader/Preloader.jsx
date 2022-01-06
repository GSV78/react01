import css from './Preloader.module.css'
import preloader from './../../../assets/images/loader.svg'


const Preloader = (props) => {
    return (
        <div className={css.preloader}>
            {props.isFetching ? <img alt='preloader' src={preloader} /> : null}
        </div>
    )
}

export default Preloader