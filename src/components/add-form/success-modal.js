import React from 'react';
import Modal from 'react-modal';
import './success-modal.css';
import {Link} from 'react-router-dom';
const SuccessModal = ({modalOpen,setModalOpen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: "#71ccca",
          borderRadius:'20px'
        },
      };
      
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
        <div className='modal-inner'>
            <label> Expense added successfully</label>
            <img src='https://png.pngtree.com/png-vector/20210407/ourmid/pngtree-team-success-concept-achievement-flat-png-image_3195755.jpg' alt="success" className='added-image'/>
            <Link to="/">
            <div className='take-home-button'>
            <i class="fi fi-sr-house-chimney"></i>
            Home
            </div>
            </Link>
        </div>
    </Modal>
  )
}

export default SuccessModal;
