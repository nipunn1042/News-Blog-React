import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

// const API_KEY = "c47bdcbd3da841278359aedcadb8661a";
const API_URL = ``;

const Home = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("General News");
  const [loading, setLoading] = useState(false);
  const [visibleArticles, setVisibleArticles] = useState([]);
  const [articleCount, setArticleCount] = useState(9);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category" || "general");

    if(category === "general"){
      setTitle("General News")
    }
    else{
      setTitle(`${category ? category.charAt(0).toUpperCase() + category.slice(1) : "General"} News`);
    }

    fetchArticles(category);
    setSearchQuery("");

  }, [location.pathname, location.search]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async (query = "general") => {
    setLoading(true);
    try {
      const response = await axios.get(`https://news-blog-react.onrender.com`);
      setArticles(response.data.articles);
      setVisibleArticles(response.data.articles.slice(0, 9));
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
    setLoading(false);
  };

  const loadMoreHandler = () => {
    const newArticleCount = articleCount + 6;
    setArticleCount(newArticleCount);
    setVisibleArticles(articles.slice(0, newArticleCount));
    console.log("Load more articles");
  };

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      fetchArticles(searchQuery);
    }
    console.log("Search for articles");
  };

  return (
    <div className="w-full max-w-auto mx-auto p-6 min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          {title}
        </h1>

        {/* Search Bar */}
        <form onSubmit={searchHandler} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery} // Controlled input
            onChange={(e) => setSearchQuery(e.target.value)} // Update state
            className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 w-64 focus:outline-none 
                 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />

          {/* Search Icon Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-all duration-300"
          >
            <Search size={20} />
          </button>
        </form>
      </div>

      {/* Articles Grid */}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 justify-center">
        {loading ? (
          <p className="text-gray-600 dark:text-gray-300 text-center col-span-3">
            Loading articles...
          </p>
        ) : visibleArticles.length > 0 ? (
          visibleArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-80 mx-auto 
                         transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-4">
                <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full">
                  {article.category || "General"}
                </span>
                <h2 className="text-lg font-semibold mt-2 text-gray-900 dark:text-white">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {article.description || "No description available."}
                </p>
                <Link
                  to={`/article/${index}`}
                  state={{ article }}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition-all duration-300"
                >
                  {t("home.read_more")}
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-300 text-center col-span-3">
            No articles found.
          </p>
        )}
      </div>

      {/* load more button */}
      {articleCount < articles.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreHandler}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all duration-300"
          >
            {t("home.load_more")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
