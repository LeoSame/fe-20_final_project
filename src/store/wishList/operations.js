import { addProductToWishlist, deleteProductFromWishlist, getWishlist, deleteWishlist } from '../../http/wishlistAPI';
import { wishListLoadingAction, saveWishListAction, clearWishList } from './actions';

export const getWishListOperation = () => dispatch => {
  dispatch(wishListLoadingAction(true));
  getWishlist().then(res => {
    dispatch(saveWishListAction(res.data));
    dispatch(wishListLoadingAction(false));
  });
};

export const addProductToWishlistOperation = id => dispatch => {
  addProductToWishlist(id).then(res => {
    dispatch(saveWishListAction(res.data));
  });
};

export const deleteProductFromWishlishtOperation = id => dispatch => {
  deleteProductFromWishlist(id).then(res => {
    dispatch(saveWishListAction(res.data));
  });
};

export const deleteWishList = () => dispatch => {
  deleteWishlist().then(res => {
    dispatch(clearWishList(res.data));
  });
};
