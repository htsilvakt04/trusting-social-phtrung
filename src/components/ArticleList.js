import React from 'react';
import { connect } from 'react-redux';
import Article from './Article';
import { getAllArticles } from '../reducers';

const ArticleList = ({ articles }) =>
    articles.map( article => <Article key={article._id} item={article} />);

function mapStateToProps(state) {
    return {
        articles: getAllArticles(state),
    };
}
export default connect(mapStateToProps)(ArticleList);
