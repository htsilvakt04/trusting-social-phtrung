import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { getInitData } from '../actions';
import Loading from './Loading';
import Navbar from './Navbar';
import Header from './Header';
import ModalWrapper from './ModalWrapper';
import Pagination from './Pagination';

class App extends Component {
    state = {
        hasError: false
    };

    componentDidMount() {
        this.initData()
    }

    initData = () => {
        this.props.getInitData().catch( err => {
            console.log('err', err);
            this.setState(() => ({hasError: true}))
        });
    };

    render() {

        if (this.state.hasError) {
            return <button onClick={this.initData} className="btn btn-default">Retry</button>
        }

        if (this.props.isLoading) {
            return <Loading />;
        }

        return (
            <Fragment>
                <LoadingBar/>
                <Navbar />
                <div className="container">
                    <Header />
                    <div className="row">
                        <div className="col-sm-12 blog-main">
                            <ModalWrapper/>
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
