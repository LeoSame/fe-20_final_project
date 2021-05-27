/* eslint-disable no-console */
import jwtDecode from 'jwt-decode';
import { $authHost, $host } from './index';

// @route   POST /customers
// @desc    Register customer
// @access  Public
export const createCustomer = async value => {
  const res = await $host.post('customers', value).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   POST /customers/login
// @desc    Login Customer / Returning JWT Token
// @access  Public
export const loginCustomer = async value => {
  const res = await $host.post('customers/login', value).catch(err => {
    throw err.response;
  });
  if (res) {
    localStorage.setItem('token', res.data.token);
    const data = jwtDecode(res.data?.token);
    return data;
  }
  return res;
};

// @route   GET /
// @desc    Return current customer
// @access  Private
export const getCustomer = async () => {
  const res = await $authHost.get('customers/customer').catch(err => {
    throw err.response;
  });
  return res;
};

// @route   PUT /customers
// @desc    Update customer
// @access  Private
export const editCustomerInfo = async values => {
  const res = await $authHost.put('customers', values).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   POST /customers/profile/update-password
// @desc    Change password
// @access  Private
export const updatePassword = async values => {
  const res = await $authHost.put('customers/password', values).catch(err => {
    throw err.response;
  });
  return res;
};
