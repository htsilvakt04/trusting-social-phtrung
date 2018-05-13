import React from 'react';
import PropsType from 'prop-types';
import { connect } from 'react-redux';
import { getNextPageData, getPrevPageData } from '../actions';
import { getCurrentPaginationIndex } from '../reducers';

const Pagination = ({currentPaginationIndex, getNextPageData, getPrevPageData}) => (
    <nav>
        <ul className="pager">
            <li>
                <button
                    disabled={currentPaginationIndex === 1}
                    onClick={() => getPrevPageData(currentPaginationIndex)}>
                    Previous
                </button>
            </li>

            <li>
                <button
                    disabled={currentPaginationIndex > 15}
                    onClick={() => getNextPageData(currentPaginationIndex)}>
                    Next
                </button>
            </li>
        </ul>
    </nav>
);

Pagination.propTypes = {
    currentPaginationIndex: PropsType.number.isRequired,
    getNextPageData: PropsType.func.isRequired,
    getPrevPageData: PropsType.func.isRequired,
}

function mapStateToProps(state) {
    return {
        currentPaginationIndex: getCurrentPaginationIndex(state),
    };
}
export default connect(mapStateToProps, { getNextPageData, getPrevPageData })(Pagination);
