// NewsPage.js
import React from "react";
import { BlogTexts } from "../particles/Data"; // Update the path accordingly

const NewsPage = () => {
  return (
    <div className="news-container">
      <h1 className="news-heading">{BlogTexts.firstText}</h1>
      <h2 className="latest-news-heading">{BlogTexts.secondText}</h2>
      <div className="blog-list">
        {BlogTexts.blogNews.map((blog, index) => (
          <div key={index} className="blog-item">
            <h3 className="blog-caption">{blog.caption}</h3>
            <h4 className="blog-title">{blog.title}</h4>
            <p className="blog-paragraph">{blog.paragraph}</p>
            <div className="blog-meta">
              <span className="blog-time">{blog.time}</span>
              <span className="blog-author">{blog.author}</span>
              <span className="blog-comments">{blog.comments} Comments</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
