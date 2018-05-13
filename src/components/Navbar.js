import React from 'react';
import PropsType from 'prop-types';
import { connect } from 'react-redux';
import { getInitData } from '../actions';
import { getCurrentPaginationIndex } from '../reducers';

const Navbar = ({ getInitData, currentPaginationIndex }) => (
    <div className="blog-masthead">
        <div className="container">
            <nav className="blog-nav">
                <a className="blog-nav-item active" onClick={(event) => {
                    if (currentPaginationIndex === 1) {
                        return;
                    }
                    event.preventDefault();
                    getInitData();
                }}>Home</a>
            </nav>
        </div>
    </div>
)

Navbar.propTypes = {
    currentPaginationIndex: PropsType.number.isRequired,
    getInitData: PropsType.func.isRequired,
}

function mapStateToProps(state) {
    return {
        currentPaginationIndex: getCurrentPaginationIndex(state),
    };
}
export default connect(mapStateToProps, { getInitData })(Navbar);
