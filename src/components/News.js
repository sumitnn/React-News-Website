import React from 'react';
import Newslist from './Newslist';


const News = ({data}) => {

  return (
      <>
        <Newslist value={data} />
     </>
  )
}

export default News
