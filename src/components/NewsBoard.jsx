import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';

const NewsBoard = ({category}) => {
  const [articles, SetArticles] = useState([]);

  useEffect( () => {

    let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(URL).then(response => response.json()).then(data=> SetArticles(data.articles ));


  },[category]);

  return (
    <>
    <div className="newsboard">
      <h1 className="text-center mt-2 mb-2">LATEST <span className="black">NEWS</span></h1>
      {articles.map(( news,index)=>{
        return
        <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}

<div className="container">
  <div className="row">
   
    {articles.map(( news,index)=>{
        return<NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  </div>
</div>
    
    </>
  )
}

export default NewsBoard