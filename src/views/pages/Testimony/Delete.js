import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultSubmit } from 'components';

const Delete = (props) => {
  const { modal, toggleModal, theme }  = props;
  const modalOpen = (modal.show && modal.context === 'delete') ? true : false;
  const handleSubmit = (event) => {
    Promise.resolve( props.destroy('/testimony', modal.row.id) )
      .then(destroy => destroy.status && toggleModal(false))
      .then(() => props.getAll('/testimony'))
      .catch(err => console.log(err))
  }
  
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="md" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Delete Testimony </ModalHeader>
        <AvForm id="deleteTtestimony" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <h6>Are you sure want to delete this testimony</h6>
          </ModalBody>
        <ModalFooter>
          <DefaultSubmit submitText="Yes" cancelText="No" />
        </ModalFooter>
        </AvForm>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
    theme: state.theme.theme
  }
}

const mapDispatchToProps = {
  toggleModal: modalActions.toggle,
  getAll: loadTableActions.getAll,
  destroy: submitFormActions.destroy

}

export default connect(mapStateToProps, mapDispatchToProps)(Delete)