import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getBrandsOperation } from '../../../store/brands/operations';
import { brandsLoadingSelector, getBrandsSelector } from '../../../store/brands/selectors';
import Loader from '../../Loader/Loader';
import styles from './BrandBar.module.scss';

const BrandBar = () => {
  const brands = useSelector(getBrandsSelector);
  const brandsLoading = useSelector(brandsLoadingSelector);
  const dispatch = useDispatch();

  const sliderSettings = {
    infinite: false,
    speed: 700,
    slidesToShow: 9,
    slidesToScroll: 3,
  };

  useEffect(() => {
    dispatch(getBrandsOperation());
  }, []);

  const brandsList = brands.map(brand => {
    return (
      <div key={brand.name} className={styles.itemContainer}>
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

  return (
    <div className={styles.container}>
      {brandsLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <Slider className={styles.slider} {...sliderSettings}>
          {brandsList}
        </Slider>
      )}
    </div>
  );
};

export default BrandBar;