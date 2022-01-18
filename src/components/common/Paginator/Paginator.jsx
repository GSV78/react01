import React, { useState } from 'react'
import css from './Paginator.module.css'


const Paginator = ({ totalCount, pagesSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = totalCount / pagesSize
    let pages = [];
    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={css.pagination}>
            {(leftPortionPageNumber > 1)
                ? (<button onClick={() => setPortionNumber(1)} >начало</button>)
                : null}
            {(leftPortionPageNumber > 1)
                ? (<button onClick={() => setPortionNumber(--portionNumber)} >пред</button>)
                : null}
            {pages
                .filter(p => (p >= leftPortionPageNumber && p <= rightPortionPageNumber))
                .map(page => {
                    return (
                        <span key={page} className={currentPage === page ? css.selectedPage : undefined} onClick={() => onPageChanged(page)}>
                            {page}
                        </span>
                    )
                })
            }
            {(rightPortionPageNumber < pagesCount)
                ? (<button onClick={() => setPortionNumber(++portionNumber)} > след </button>)
                : null}
            {(rightPortionPageNumber < pagesCount)
                ? (<button onClick={() => setPortionNumber(portionCount)} >конец</button>)
                : null}
        </div >
    )
}

export default Paginator