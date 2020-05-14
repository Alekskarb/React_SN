import React, {useState} from 'react';
import s from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, partSize = 10, ...props}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let partCount = Math.ceil(pagesCount / partSize);
    let [partNumber, setPartNumber] = useState(1);
let leftPartPageNumber = (partNumber - 1)* partSize + 1;
let rightPartPageNumber = partNumber * partSize;

    return <div className={s.pagination}>

        {partNumber > 1 && <button onClick={()=> {setPartNumber(partNumber - 1)}}> PREV </button>}

            {pages
                .filter(p => p>= leftPartPageNumber && p<= rightPartPageNumber)
                .map(page => {
                return <span className={ cn ({
                         [s.selectedPage]: currentPage === page
                    }, s.pageNumber)}
                          key={page}
                          onClick={(e) => {
                              onPageChanged(page)
                          }}> {page} </span>
            })}
        {partCount > partNumber && <button onClick={()=> {setPartNumber(partNumber + 1)}}> NEXT </button>}
        </div>
};

export default Paginator;