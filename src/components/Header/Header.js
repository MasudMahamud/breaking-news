import React from 'react';
import {useState, useEffect} from 'react';
import News from '../News/News';
import './Header.css'


const Header = () => {
 
    const [articles, setArticles] = useState([]);

    useEffect(() => {
         const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1c7e79d44a1840d4b6e8b251a3212099'
         fetch(url)
         .then(res => res.json())
         .then(data=> setArticles(data.articles));
        
    }, [])

    return (
        
    <div className="news-style">
        <h2 className="title">US Update News : {articles.length}</h2>
    
            
            {
                articles.map(article => <News article={article}> </News> )
            }
         </div>   
        
    );
};

export default Header;