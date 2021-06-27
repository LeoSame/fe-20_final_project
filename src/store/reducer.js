import { combineReducers } from 'redux';
import filtersReducer from './filter/reducer';
import customerReducer from './customer/reducer';
import productsReducer from './products/reducer';
import catalogReducer from './catalog/reducer';
import cartReducer from './cart/reducer';
import modalReducer from './modal/reducer';
import brandsReducer from './brands/reducer';
import pageReducer from './pages/reducer';
import linksReducer from './links/reducer';
import wishListReducer from './wishList/reducer';
import colorsReducer from './colors/reducer';
import searchReducer from './search/reducer';

const reducer = combineReducers({
  brands: brandsReducer,
  filters: filtersReducer,
  customer: customerReducer,
  products: productsReducer,
  catalog: catalogReducer,
  cart: cartReducer,
  page: pageReducer,
  modal: modalReducer,
  links: linksReducer,
  wishList: wishListReducer,
  colors: colorsReducer,
  search: searchReducer,
});

export default reducer;
