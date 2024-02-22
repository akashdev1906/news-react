import React from 'react'
import Image from '../assets/news.jpg'

const NewsItems = ({title,description,src, url}) => {
  const divStyle = {
    
   height:'200px'

    
  };
  const cardStyle = {
    height:'550px',
  }
   // Check if title and description are valid strings
   if (!title || !description) {
    return null; // Or render an appropriate fallback content
  }

  // Splitting the description into words
  const descriptionWords = description.split(' ');

  // Limiting the description to 50 words
  const limitedDescription = descriptionWords.slice(0, 50).join(' ');

  // Splitting the title into words
  const titleWords = title.split(' ');

  // Limiting the title to 20 words
  const limitedTitle = titleWords.slice(0, 20).join(' ');
  
  return (
    <>
    <div className="col-md-4 mb-5 mt-5">
    <div className="card bg-dark text-light" style={cardStyle} >
  <img src={src?src:Image}  style={divStyle} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{limitedTitle}</h5>
        <p className="card-text">{limitedDescription}</p>

    <a href={url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

</>
  )
}

export default NewsItems