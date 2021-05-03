/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-modal';
// import style from './FavsClearModal.module.scss';
import './FavsClearModal.scss';

function FavsClearModal({ modalOpen, setModalOpen }) {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      ariaHideApp={false}
      className='modal'
      closeTimeoutMS={300}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
        },
      }}
    >
      <div>
        <h3>Подтвердите действие:</h3>
        <p>Вы уверены что хотите очистить список желаний?</p>
        <div className='position'>
          <button type='button' className='button ok'>
            OK
          </button>
          <button type='button' className='button' onClick={() => setModalOpen(false)}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default FavsClearModal;
