import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import './CartModal.scss';
import data from './data';
import Button from '../Button/Button';
import SliderInModal from '../SlickSlider/SliderInModal';

const CartModal = ({ showModal, setShowModal }) => {
  const [qty, setQty] = useState(1);

  const incrementQty = () => {
    setQty(qty + 1);
  };
  const decrementQty = () => {
    setQty(qty - 1);
  };
  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className='title'>Корзина</Modal.Title>
        <div className='d-flex align-self-end qty-price'>
          <p className='mr-3'>количество</p>
          <p className='ml-2'>стоимость</p>
        </div>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {data.cart.map(item => (
            <li key={item.id} className='modal__item-box'>
              <div className='row'>
                <div>
                  <button type='button' onClick={() => console.log('Deleted!')} className='btn-delete'>
                    <img src='https://image.flaticon.com/icons/svg/709/709519.svg' alt='delete icon' />
                  </button>
                </div>
                <div>
                  <img src={item.image} alt={item.name} className='small' />
                </div>
                <div>
                  <Link to={`/product/${item.id}`} className='modal__link-product'>
                    {item.name}
                  </Link>
                </div>
                <div className='input-box'>
                  <Button title='-' className='modal__btn-plus' onClick={() => decrementQty()} disabled={qty === 1} />
                  <input className='input__field' type='text' name='qty' value={qty} readOnly />
                  <Button
                    title='+'
                    className='modal__btn-plus'
                    onClick={() => incrementQty()}
                    disabled={qty === item.countInStock}
                  />
                </div>
                <div className='total__cost'>{qty * item.price} грн</div>
              </div>
            </li>
          ))}
        </ul>
        <div className='modal__item-box'>
          <div className='modal__total-wrapper'>
            <p className='modal__total-text'>Итого</p>
            <div className='total__cost low'> {data.cart.reduce((a, i) => a + i.price * qty, 0)} грн </div>
          </div>
          <div className='modal__order-wrapper'>
            <Link to='/' className='modal__link-home'>
              &#8592;Вернуться к покупкам
            </Link>
            <div>
              <Button
                title='Оформить заказ'
                onClick={() => console.log('Заказ Оформлен!')}
                className='modal__btn-order'
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <h5 className='section-title'>Также рекомендуем приобрести</h5>
      <div className='slider-container'>
        <SliderInModal />
      </div>
    </Modal>
  );
};
CartModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
export default CartModal;