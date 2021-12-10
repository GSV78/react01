import css from './Dialogues.module.css'
import icon from './icon.svg'

const Dialogues = () => {
    return (
        <div className={css.dialoguesInner}>
            <div className={css.dialogues}>
                <div className={css.title}>Диалоги</div>
                <div className={css.dialog}>
                    <img src={icon} />
                    Санек
                </div>
                <div className={css.dialog}>
                    <img src={icon} />
                    Антон
                </div>
                <div className={css.dialog}>
                    <img src={icon} />
                    Оля
                </div>
                <div className={css.dialog}>
                    <img src={icon} />
                    Тоня
                </div>
                <div className={css.dialog}>
                    <img src={icon} />
                    Никита
                </div>
            </div>

            <div className={css.messages}>
                <div className={css.message}>
                    Привет!
                </div>
                <div className={css.message}>
                    Как сам?
                </div>
                <div className={css.message}>
                    С наступающим! Йоу!
                </div>
                <div className={css.message}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quod architecto minima, incidunt mollitia eaque nostrum tempora facilis repudiandae suscipit veritatis velit, hic praesentium aliquam ea molestiae, maiores illum nihil vitae? Maxime, perspiciatis laboriosam rem minus aliquid nihil? Recusandae mollitia molestias odit, ut nulla incidunt ducimus corporis architecto tenetur quaerat!
                </div>
            </div>
        </div>
    )
}

export default Dialogues