import React from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import { useResponsePopup } from '../contexts/ResponsePopupProvider';

const ResponsePopup = () => {
    
    const { open, setOpen, status, response } = useResponsePopup();

    const handleCloseResponsePopup = () => {
        setOpen(false);
    };

    return ( 
        <Modal
        show={open}
        onHide={handleCloseResponsePopup}
        backdrop
        keyboard={false}
        >
            <Alert variant={status ? 'success' : 'danger'}>
                <Modal.Header closeButton>
                    <Modal.Title>{status ? 'Sukces!' : 'Błąd!'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {response}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseResponsePopup}>
                        Close
                    </Button>
                </Modal.Footer>
            </Alert>
        </Modal>
     );
}
 
export default ResponsePopup;