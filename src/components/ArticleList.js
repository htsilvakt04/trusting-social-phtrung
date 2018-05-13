import React from 'react';
import { connect } from 'react-redux';
import Article from './Article';
import { getAllArticles, getIsLoadingBar } from '../reducers';

class ArticleList extends React.Component {
    componentDidUpdate () {
        window.scroll({top: 0, left: 0});
    }
    render () {
        const { articles, handleTriggerModal, isLoadingBar } = this.props;

        return articles.map( article => <Article isLoadingBar={isLoadingBar} triggerModal={handleTriggerModal} key={article._id} item={article}/>)
    }
}
function mapStateToProps(state) {
    return {
        articles: getAllArticles(state),
        isLoadingBar: getIsLoadingBar(state),
    };
}
export default connect(mapStateToProps)(ArticleList);
