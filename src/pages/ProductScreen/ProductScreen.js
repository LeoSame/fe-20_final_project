import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductScreen.module.scss';
import data from './data';
import Button from '../../components/Button/Button';
import DeliveryInfo from './DeliveryInfo';
import PaymentInfo from './PaymentInfo';
import WarrantyInfo from './WarrantyInfo';
import CartModal from '../../components/modals/CartModal';
import Heart2 from '../../theme/icons/Heart2';
import Container from '../../components/Container/Container';

const ProductScreen = () => {
  const { name, image, price, previousPrice, countInStock, itemNo } = data.currentProduct;
  const [buttons, setButtons] = useState({
    deliveryActive: true,
    paymentActive: false,
    warrantyActive: false,
  });
  const [info, setInfo] = useState({
    deliveryInfo: true,
    paymentInfo: false,
    warrantyInfo: false,
  });

  const handleClickDelivery = () => {
    setButtons({ deliveryActive: true, paymentActive: false, warrantyActive: false });
    setInfo({ deliveryInfo: true, paymentInfo: false, warrantyInfo: false });
  };
  const handleClickPayment = () => {
    setButtons({ deliveryActive: false, paymentActive: true, warrantyActive: false });
    setInfo({ deliveryInfo: false, paymentInfo: true, warrantyInfo: false });
  };
  const handleClickWarranty = () => {
    setButtons({ deliveryActive: false, paymentActive: false, warrantyActive: true });
    setInfo({ deliveryInfo: false, paymentInfo: false, warrantyInfo: true });
  };
  const [isOpen, setIsOpen] = useState(false);

  const addToCartHandler = () => {
    // dispatch(addToCartAction(productID))
    setIsOpen(true);
  };
  return (
    <Container>
      <CartModal isOpen={isOpen} hideModal={() => setIsOpen(false)} />
      <div className={`${styles.row} ${styles.row__top}`}>
        <div className={styles.col__one}>
          <img className={styles.large} src={image} alt={name} />
        </div>
        <div className={styles.col__two}>
          <ul>
            <li>
              <span className={styles.location}>Главная &#62; Мужские</span>
            </li>
            <li>
              <h3 className={styles.name}>{name}</h3>
            </li>
            <li>
              <div className={`${styles.row} ${styles.row__start}`}>
                <div className={styles.gap}>
                  {countInStock > 0 ? (
                    <span className={styles.success}>В наличии</span>
                  ) : (
                    <span className={styles.danger}>Отсутствует</span>
                  )}
                </div>
                <p className={styles.gap}>Артикул:{itemNo}</p>
                <Link className={styles.review} to='/reviews'>
                  Оставить отзыв
                </Link>
              </div>
            </li>
            <li>
              <div className={`${styles.row} ${styles.row__between}`}>
                <div>
                  <span className={styles.price}>{price} грн</span>
                  {data.currentProduct.previousPrice && <span className={styles.oldPrice}>{previousPrice} грн</span>}
                </div>
                <div className={`${styles.row} ${styles.row__center}`}>
                  <div className={styles.icon__frame}>
                    <Heart2 />
                  </div>
                  <p>в желания</p>
                </div>
              </div>
            </li>
            <li className={styles.btns__block}>
              <Button title='Купить' onClick={addToCartHandler} />
              <Button
                title='Быстрый заказ'
                className={styles.btn__quickOrder}
                onClick={() => console.log('Quick Buy!')}
              />
            </li>
            <li>
              <div className={styles.info__block}>
                <Button
                  title='Доставка'
                  className={buttons.deliveryActive ? `${styles.about} ${styles.active}` : `${styles.about}`}
                  onClick={handleClickDelivery}
                />
                <Button
                  title='Оплата'
                  className={buttons.paymentActive ? `${styles.about} ${styles.active}` : `${styles.about}`}
                  onClick={handleClickPayment}
                />
                <Button
                  title='Гарантия'
                  className={buttons.warrantyActive ? `${styles.about} ${styles.active}` : `${styles.about}`}
                  onClick={handleClickWarranty}
                />
                {info.deliveryInfo && <DeliveryInfo />}
                {info.paymentInfo && <PaymentInfo />}
                {info.warrantyInfo && <WarrantyInfo />}
                {info.deliveryInfo && (
                  <Link to='/delivery' className={styles.delivery}>
                    Подробнее о доставке
                  </Link>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default ProductScreen;
