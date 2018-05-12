import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getInitData } from '../actions';
import Loading from './Loading';
import Navbar from './Navbar';
import Header from './Header';
import Pagination from './Pagination';
import ArticleList from './ArticleList';

class App extends Component {
    componentDidMount() {
        this.props.getInitData();
    }
    render() {
        if (this.props.isLoading) {
            return <Loading />;
        }
        return (
            <Fragment>
                <Navbar />
                <div className="container">
                    <Header />
                    <div className="row">
                        <div className="col-sm-12 blog-main">
                            <ArticleList />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps({ IDs }) {
    return {
        isLoading: IDs.length < 1,
    };
}

export default connect(mapStateToProps, { getInitData })(App);
