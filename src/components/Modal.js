import React from 'react';
import PropsType from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { generateImgUrl } from '../utils/helpers';
import { getArticleById } from '../reducers';

class Modal extends React.Component {
    closeOutsideOverlay = (event) => {
        if (!this.modal.contains(event.target)) {
            this.props.closeModal();
        }
    }
    // handle click outside overlay
    componentDidMount () {
        document.addEventListener('click', this.closeOutsideOverlay, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.closeOutsideOverlay, false);
    }

    render () {
        const { isActive, closeModal, item } = this.props;
        return (
            <div className={"modal" + (isActive ? " show" : " fade")} id="myModal" role="dialog">
                <div className="modal-dialog modal-lg"  ref={ node => (this.modal = node)}  role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" onClick={closeModal} className="close"  aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">{item.snippet}</h4>
                        </div>
                        <div className="modal-body">
                            <div className="blog-post">
                                <p className="blog-post-meta">{moment(item.pub_date).fromNow()} by <a>{item.source}</a></p>
                                <div className="text-center">
                                    <img src={generateImgUrl(item)} className="img-responsive img-center" alt="img"/>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer text-center" style={{'textAlign': 'center'}}>
                            <button type="button" onClick={closeModal} className="btn btn-default" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Modal.propTypes = {
    item: PropsType.object.isRequired,
    isActive: PropsType.bool.isRequired,
    closeModal: PropsType.func.isRequired,
}

function mapStateToProps(state, { id }) {
    return {
        item: getArticleById(state, id)
    }
}
export default connect(mapStateToProps)(Modal);