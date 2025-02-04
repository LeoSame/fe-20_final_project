import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import Slider from 'react-slick';
import { getBrandsOperation } from '../../../store/brands/operations';
import { brandsLoadingSelector, getBrandsSelector } from '../../../store/brands/selectors';
import { getProductsFilterOperation } from '../../../store/products/operations';
import { getProductsFilterSelector } from '../../../store/products/selectors';
import { PRODUCTS_ROUTE } from '../../../utils/consts';
import Loader from '../../Loader/Loader';
import styles from './BrandBar.module.scss';

const sliderSettings = {
  infinite: false,
  speed: 700,
  slidesToShow: 9,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
      },
    },
  ],
};

const BrandBar = () => {
  const dispatch = useDispatch();
  const brands = useSelector(getBrandsSelector);
  const productFilters = useSelector(getProductsFilterSelector);
  const brandsLoading = useSelector(brandsLoadingSelector);

  const history = useHistory();
  const { search } = useLocation();

  useEffect(() => {
    dispatch(getBrandsOperation());
  }, []);

  const filterProductAllBrand = () => {
    const { brand, ...filters } = productFilters;
    dispatch(getProductsFilterOperation({ history, ...filters }));
  };

  const filterProductByBrand = brand => {
    if (!history.location.pathname.includes('products')) {
      history.push(PRODUCTS_ROUTE);
    }
    dispatch(getProductsFilterOperation({ history, ...productFilters, brand }));
  };

  let brandsList = null;

  if (!brandsLoading) {
    brandsList = brands.map(brand => {
      let classNameItem = styles.itemContainer;

      if (search.includes(`brand=${brand.name}`)) {
        classNameItem = `${styles.itemContainer} ${styles.itemActive}`;
      }

      return (
        <div key={brand.name} className={classNameItem} onClick={() => filterProductByBrand(brand.name)}>
          <li className={styles.item}>
            {brand.imageUrl ? (
              <img alt={brand.name} src={brand.imageUrl} className={styles.img} />
            ) : (
              <div className={styles.name}>{brand.name}</div>
            )}
          </li>
        </div>
      );
    });
  }

  return (
    <div className={styles.container}>
      {brandsLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <ul>
          <Slider className={styles.slider} {...sliderSettings}>
            {history.location.pathname.includes('products') && (
              <div
                key='all'
                className={
                  search.includes('brand') ? styles.itemContainer : `${styles.itemContainer} ${styles.itemActive}`
                }
                onClick={() => filterProductAllBrand()}
              >
                <li className={styles.item}>
                  <div className={styles.name}>Все бренды</div>
                </li>
              </div>
            )}
            {brandsList}
          </Slider>
        </ul>
      )}
    </div>
  );
};

export default BrandBar;
