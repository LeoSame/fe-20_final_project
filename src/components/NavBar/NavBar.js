/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { INDEX_ROUTE, PERSONAL_INFO_ROUTE, PRODUCTS_ROUTE } from '../../utils/consts';
import Container from '../Container/Container';
import Icons from '../Icons/Icons';
import MyOrders from './MyOrders/MyOrders';
import Logo from '../../theme/Logo';
import styles from './NavBar.module.scss';
import CategoriesList from './CategoriesList/CategoriesList';

const NavBar = () => {
  const location = useLocation();
  const favorites = 3;

  const heartJsx = [
    <div key='heart' className={styles.iconListItem}>
      <Icons type='navHeart' color='black' width={30} height={30} />
    </div>,
  ];

  return (
    <div className={styles.bgContainer}>
      <Container>
        <nav>
          <div className={styles.flexContainer}>
            <div>
              {location.pathname === '/' ? (
                <Logo />
              ) : (
                <NavLink to={INDEX_ROUTE}>
                  <Logo />
                </NavLink>
              )}
            </div>
            <div className={styles.menuContainer}>
              <ul className={styles.menuList}>
                <li key='all'>
                  <NavLink to={PRODUCTS_ROUTE} className={styles.menuLink}>
                    Все товары
                  </NavLink>
                </li>
                <CategoriesList className={styles.menuLink} />
              </ul>
              <ul className={styles.iconList}>
                <li key='favorites'>
                  {favorites ? (
                    <NavLink to={INDEX_ROUTE}>
                      {heartJsx}
                      <span className={styles.favorites}>{favorites}</span>
                    </NavLink>
                  ) : (
                    heartJsx
                  )}
                </li>
                <li key='personalInfo' className={styles.iconListItem}>
                  <NavLink to={PERSONAL_INFO_ROUTE}>
                    <Icons type='navUser' color='black' width={30} height={30} />
                  </NavLink>
                </li>
                <li key='cart' className={styles.iconListItem}>
                  <MyOrders />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
