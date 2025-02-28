import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DetailArticle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  console.log(article);     
  

  if (!article) {
    return (
      <div className="container mx-auto p-6 min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <h1 className="text-center mt-20 dark:text-gray-200">
          Article not found
        </h1>
      </div>
    );
  }

    return (
        <div className="container mx-auto p-6 min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-2xl mx-auto">
            <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
            >
            Go Back
            </button>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            {article.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{article.description}</p>
            <img src={article.urlToImage} alt={article.title} className="mt-4" />
            <p className="text-gray-600 dark:text-gray-300 mt-4">{article.content}</p>
            <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 mt-4 block"
            >
            Read more
            </a>
        </div>
        </div>
    );
};

export default DetailArticle;
