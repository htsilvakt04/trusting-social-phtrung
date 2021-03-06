import React from 'react';
import PropsType from 'prop-types';
import moment from 'moment';
import { generateImgUrl } from '../utils/helpers';

const Article = ({ item, triggerModal, isLoadingBar }) => (
    <div className="blog-post">
        <a onClick={() => {
            if (isLoadingBar) {
                return;
            }
            triggerModal(item._id);
        }}>
            <h2 className="blog-post-title">{item.snippet}</h2>
        </a>
        <p className="blog-post-meta">{moment(item.pub_date).fromNow()} by <a>{item.source}</a></p>
        <img src={generateImgUrl(item)} className="img-responsive" alt="img" />
    </div>
)

Article.propTypes = {
    item: PropsType.object.isRequired,
    triggerModal: PropsType.func.isRequired,
    isLoadingBar: PropsType.bool,
}
export default Article;
