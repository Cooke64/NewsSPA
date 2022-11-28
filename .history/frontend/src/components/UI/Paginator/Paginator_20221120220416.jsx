import React from 'react'

export default function Paginator() {
    if (sortedSelectPosts.length) {
        return (
          <div className="page__wrapper">
          {
          arr.map(p =>
            <span key={p} className={page === p ? 'page page__current' : 'page'} onClick={() => changePage(p)}>
                {p}
            </span>
            )}
            </div>
        )
      }
}
