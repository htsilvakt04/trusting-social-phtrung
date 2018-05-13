import React from 'react';
import { connect } from 'react-redux';
import Article from './Article';
import { getAllArticles } from '../reducers';

class ArticleList extends React.Component {
    componentDidUpdate () {
        window.scroll({top: 0, left: 0});
    }
    render () {
        const { articles } = this.props;

        return articles.map( article => <Article key={article._id} item={article}/>)
    }
}
function mapStateToProps(state) {
    return {
        articles: getAllArticles(state),
    };
}
export default connect(mapStateToProps)(ArticleList);
