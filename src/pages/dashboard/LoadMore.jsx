import React from 'react';

const LoadMore = () =>  {
  const loadMore = () => {
    alert('Loading More ....')
  }
  return (
    <div className="loadMoreWrap" onClick={loadMore}>
        <div className='moreIcon'/>
        <div className='moreText'>
            Load more
        </div>
    </div>
  )
}

export default LoadMore;