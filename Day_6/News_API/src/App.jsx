import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY; 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            sources: 'techcrunch',
            apiKey: apiKey,
          },
        });
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey]);

  const nextArticle = () => {
    setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (articles.length === 0) return <div>No articles available</div>;

  const currentArticle = articles[currentArticleIndex];

  return (
    <div className="news-container">
      <div className="news-box">
        <h2>{currentArticle.title}</h2>
        <p>{currentArticle.description}</p>
        <a href={currentArticle.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
      <button className="next-button" onClick={nextArticle}>
        Next News
      </button>
    </div>
  );
};

export default App;
