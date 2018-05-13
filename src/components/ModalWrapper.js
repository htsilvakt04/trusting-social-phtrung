import React from 'react';
import Modal from './Modal';
import ArticleList from './ArticleList';

class ModalWrapper extends React.Component {
    state = {
        isActive: false,
        modalId: null
    }
    handleTriggerModal = (id) => {
        // prevent scroll when modal display
        document.getElementsByTagName('body')[0].className = 'modal-open overlay';
        this.setState(() => ({isActive: true, modalId: id}));
    }
    handleCloseModal = () => {
        // prevent scroll when modal display
        document.getElementsByTagName('body')[0].className = '';
        this.setState(() => ({isActive: false}))
    }

    render () {
        return (
            <div>
                {this.state.isActive &&
                    <Modal closeModal={this.handleCloseModal} isActive={this.state.isActive} id={this.state.modalId}/>
                }
                <ArticleList handleTriggerModal={this.handleTriggerModal} />
            </div>
        )
    }
}

export default ModalWrapper;