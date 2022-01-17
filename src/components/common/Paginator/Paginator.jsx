import css from './Paginator.module.css'


const Paginator = (props) => {
    let pagesCount = props.totalCount / props.pagesSize

    let pages = [];

    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i)
    }

    return (
        <div className={css.pagination}>

            {pages.map(page => {
                return (
                    <span key={page} className={props.currentPage === page ? css.selectedPage : undefined} onClick={() => props.onPageChanged(page)}>
                        {page}
                    </span>
                )

            })
            }

        </div>
    )
}

export default Paginator