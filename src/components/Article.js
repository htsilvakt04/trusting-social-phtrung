import React from 'react';
import { generateImgUrl } from '../utils/helpers';
const Article = ({ item }) => (
    <div className="blog-post">
        <h2 className="blog-post-title">{item.snippet}</h2>
        <p className="blog-post-meta">{item.pub_date} by <a href="#">{item.source}</a></p>
        <img src={generateImgUrl(item)} className="img-responsive" alt="img"/>
    </div>
);

export default Article;
