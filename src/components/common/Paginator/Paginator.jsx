import React from 'react';
import s from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
            {pages.map(page => {
                return (
                    <span key={page.index} className={currentPage === page && s.boldPage}
                          onClick={() => {
                              onPageChanged(page)
                          }}>{page}
                    </span>
                )
            })}
        </div>
};

export default Paginator;