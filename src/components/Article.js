import React from 'react';
import { generateImgUrl } from '../utils/helpers';

const Article = ({ item, triggerModal, isLoadingBar }) => (
    <div className="blog-post">
        <a onClick={() => {
            if (isLoadingBar) {
                return;
            }
            triggerModal(item._id)
        }}>
            <h2 className="blog-post-title">{item.snippet}</h2>
        </a>
        <p className="blog-post-meta">{item.pub_date} by <a>{item.source}</a></p>
        <img src={generateImgUrl(item)} className="img-responsive" alt="img"/>
    </div>
);

export default Article;
