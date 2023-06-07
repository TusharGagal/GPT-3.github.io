import React from 'react'
import './article.css';
const article = ({imgUrl,date,text}) => {
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-container'>
        <img src={imgUrl} alt="blogimage" />
      </div>
      <div className="gpt3__article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
          <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default article
