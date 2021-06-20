/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SlideOutNav.module.scss';
import Icons from '../Icons/Icons';
import menWatch from '../../theme/img/men-watch.webp';
import womenWatch from '../../theme/img/women-watch.webp';
import kidsWatch from '../../theme/img/kids-watch.webp';
import accessories from '../../theme/img/accessories-pic.webp';
// import CategoriesList from '../CategoriesList/CategoriesList';
// import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
// import { getWishListSelector } from '../../store/wishList/selectors';
// import { CUSTOMER_WISH_LIST_ROUTE, WISH_LIST_ROUTE } from '../../utils/consts';
// import User from '../NavBar/User/User';

const SlideOutNav = ({ isOpen, toggleNav }) => {
  // const isAuth = useSelector(getCustomerIsAuthSelector);
  // const wishList = useSelector(getWishListSelector);

  // const cartLocal = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
  // const cartQuantity = cartLocal !== {} ? cartLocal.products.length : 0;

  return (
    <aside className={isOpen ? `${styles.container} ${styles.active}` : `${styles.container}`}>
      <div>
        <div className={styles.icon__container} onClick={toggleNav}>
          <Icons type='close' width={35} height={35} />
        </div>
        <h2 className={styles.title}>SmartElectronics</h2>
      </div>
      <div className={styles.menu} onClick={toggleNav}>
        <div className={styles.menu__wrapper}>
          <ul className={styles.menu__slideOut}>
            <li className={styles.navItem}>
              <img className={styles.navIcon} src={menWatch} alt='men watch' />
              <div className={styles.navLabel}>Мужские</div>
            </li>
            <li className={styles.navItem}>
              <img className={styles.navIcon} src={womenWatch} alt='women watch' />
              <div className={styles.navLabel}>Женские</div>
            </li>
            <li className={styles.navItem}>
              <img className={styles.navIcon} src={kidsWatch} alt='kids watch' />
              <div className={styles.navLabel}>Детские</div>
            </li>
            <li className={styles.navItem}>
              <img className={styles.navIcon} src={accessories} alt='kids watch' />
              <div className={styles.navLabel}>Аксессуары</div>
            </li>
            <li className={styles.navItem}>
              <img className={styles.hidden} src={accessories} alt='kids watch' />
              <div className={styles.navLabel}>Бренды</div>
            </li>
            <li className={styles.navItem}>
              <img className={styles.hidden} src={accessories} alt='kids watch' />
              <div className={styles.navLabel}>О нас</div>
            </li>
            <li className={styles.navItem}>
              <img className={styles.hidden} src={accessories} alt='kids watch' />
              <div className={styles.navLabel}>Оплата и Доставка</div>
            </li>
            <li className={styles.navItem}>
              <img className={styles.hidden} src={accessories} alt='kids watch' />
              <div className={styles.navLabel}>Обмен и Возврат</div>
            </li>
            <li className={styles.navItem}>
              <img className={styles.hidden} src={accessories} alt='kids watch' />
              <div className={styles.navLabel}>Контактная информация</div>
            </li>
            <li className={styles.navItem}>
              <img className={styles.hidden} src={accessories} alt='kids watch' />
              <div className={styles.navLabel}>Блог</div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navIcon}>
                <Icons type='navUser' filled width={30} height={30} />
              </div>
              <div className={styles.navLabel}>Мой профиль</div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navIcon}>
                <Icons type='burger' filled width={30} height={30} />
              </div>
              <div className={styles.navLabel}>Мои заказы</div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navIcon}>
                <Icons type='navHeart' width={30} height={30} />
              </div>
              <div className={styles.navLabel}>Список желаний</div>
            </li>
            <li className={styles.navItem}>
              <img className={styles.hidden} src={accessories} alt='kids watch' />
              <div className={styles.navLabel}>Выход</div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navIcon}>
                <Icons type='phone' filled width={30} height={30} />
              </div>
              <div className={styles.navLabel}>044 322 23 32</div>
            </li>
            <li className={styles.navItem}>
              <img className={styles.hidden} src={accessories} alt='kids watch' />
              <div className={styles.navLabel}>044 223 32 23</div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navIcon}>
                <Icons type='whatsApp' filled={false} width={30} height={30} />
              </div>
              <div className={styles.navLabel}>+380 95 332 23 32</div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navIcon}>
                <Icons type='skype' filled={false} width={30} height={30} />
              </div>
              <div className={styles.navLabel}>skype</div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navIcon}>
                <Icons type='telegram' filled={false} width={30} height={30} />
              </div>
              <div className={styles.navLabel}>telegram</div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
SlideOutNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

export default SlideOutNav;
