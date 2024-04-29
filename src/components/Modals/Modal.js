

import React from 'react';
import { Modal, Button } from '@mui/material';

const ModalData = ({ open, onClose, children }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal" style={{
                width: "50%",
                padding: "20px",
                height: "80vh",
                overflowY: "scroll",
                margin: "40px auto",
                background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)', color: "white", position: 'relative',
            }}>
                {children}
                <Button style={{ color: 'white', position: 'absolute', top: '5px', right: '5px', background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)', padding: '10px', }} onClick={onClose}>Close</Button>
            </div>
        </Modal>
    );
};

export default ModalData;
