/* eslint-disable react/no-typos */
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const CostumModal = (props) => {
    const { buttonLabel, modalTitle, modalDescription } = props

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={styles.stylesContainer}>
                <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
                <ModalBody>{modalDescription}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

const styles = {
    stylesContainer: {

    }
}

export default CostumModal

CostumModal.PropTypes = {
    buttonLabel: PropTypes.string,
    modalTitle: PropTypes.string,
    modalDescription: PropTypes.string
}

CostumModal.defaultProps = {
    buttonLabel: '',
    modalTitle: '',
    modalDescription: ''
}
