import React from 'react';
import { connect } from 'react-redux';
import { getNextPageData, getPrevPageData } from '../actions';
import { getCurrentPaginationIndex } from '../reducers';

const Pagination = ({currentPaginationIndex, getNextPageData, getPrevPageData}) => (
    <nav>
        <ul className="pager">
            <li>
                <button
                    disabled={currentPaginationIndex === 1}
                    onClick={() => {getPrevPageData(currentPaginationIndex)}}>
                    Previous
                </button>
            </li>

            <li>
                <button
                    disabled={currentPaginationIndex > 15}
                    onClick={() => {getNextPageData(currentPaginationIndex)}}>
                    Next
                </button>
            </li>
        </ul>
    </nav>
);

function mapStateToProps(state) {
    return {
        currentPaginationIndex: getCurrentPaginationIndex(state)
    }
}
export default connect(mapStateToProps, { getNextPageData, getPrevPageData })(Pagination);
