import React, { useState } from 'react'
import css from './Paginator.module.css'


const Paginator = ({ totalCount, pagesSize, currentPage, onPageChanged, portionSize = 10, ...props }) => {
    let pagesCount = totalCount / pagesSize
    let pages = [];
    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i)
    }

    let [portionNumber, setPortionNumber] = useState(1)

    let portionCount = Math.ceil(pagesCount / portionSize)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    const onSetPortionNumber = (num) => {
        setPortionNumber(num)
        let newCurrentPage = (num - 1) * portionSize + 1
        onPageChanged(newCurrentPage)
    }

    return (
        <div className={css.pagination}>
            {(leftPortionPageNumber > 1)
                ? (<button onClick={() => onSetPortionNumber(1)} >начало</button>)
                : null}
            {(leftPortionPageNumber > 1)
                ? (<button onClick={() => onSetPortionNumber(--portionNumber)} >пред</button>)
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
                ? (<button onClick={() => onSetPortionNumber(++portionNumber)} > след </button>)
                : null}
            {(rightPortionPageNumber < pagesCount)
                ? (<button onClick={() => onSetPortionNumber(portionCount)} >конец</button>)
                : null}
        </div >
    )
}

export default Paginator