import { createCustomer, getCustomer, loginCustomer } from '../../http/customersAPI';
import { saveCartAction } from '../cart/actions';
import { saveWishListAction } from '../wishList/actions';
import { saveModalAuthRegAction } from '../modal/actions';
import { saveCustomerAction, saveCustomerIsAuthAction, saveCustomerIsLoadingAction } from './actions';

export const checkAuthOperation = () => dispatch => {
  dispatch(saveCustomerIsLoadingAction(true));
  getCustomer()
    .then(res => {
      if (res) {
        dispatch(saveCustomerAction(res.data));
        dispatch(saveCustomerIsAuthAction(true));
        dispatch(saveCustomerIsLoadingAction(false));
      }
    })
    .catch(err => {
      dispatch(saveCustomerIsLoadingAction(false));
      return err;
    });
};

<<<<<<< HEAD
export const authorizOperation =
  ({ setmessageServer, ...value }) =>
  dispatch => {
    dispatch(saveCustomerIsLoadingAction(true));
    loginCustomer(value)
      .then(res => {
        dispatch(saveCustomerAction(res.data));
        dispatch(saveCustomerIsAuthAction(true));
        dispatch(saveModalAuthRegAction(false));
      })
      .catch(err => {
        setmessageServer(err.data.loginOrEmail || err.data.password);
      });
    dispatch(saveCustomerIsLoadingAction(false));
  };

export const createCustomerOperation =
  ({ setmessageServer, setTabIndex, ...value }) =>
  dispatch => {
    createCustomer(value)
      .then(res => {
        if (res) {
          dispatch(saveCustomerAction(res.data));
          setTabIndex(0);
        }
        return res;
      })
      .catch(err => {
        setmessageServer(Object.values(err.data).join(' '));
      });
  };
=======
export const authorizOperation = ({ setmessageServer, ...value }) => dispatch => {
  dispatch(saveCustomerIsLoadingAction(true));
  loginCustomer(value)
    .then(res => {
      dispatch(saveCustomerAction(res.data.customer));
      dispatch(saveCustomerIsAuthAction(true));
      dispatch(saveModalAuthRegAction(false));
    })
    .catch(err => {
      setmessageServer(Object.values(err.data).join(' '));
    });
  dispatch(saveCustomerIsLoadingAction(false));
};

export const createCustomerOperation = ({ setmessageServer, ...value }) => dispatch => {
  createCustomer(value)
    .then(res => {
      if (res) {
        dispatch(saveCustomerAction(res.data));
      }
      return res;
    })
    .catch(err => {
      setmessageServer(Object.values(err.data).join(' '));
    });
};
>>>>>>> fb1775e75e88e94abea52439fe91542a2a5f225d

export const outPutCustomerOperation = () => dispatch => {
  dispatch(saveCustomerAction({}));
  dispatch(saveWishListAction(null));
  dispatch(saveCartAction(null));
  dispatch(saveCustomerIsAuthAction(false));
  localStorage.setItem('token', '');
};
