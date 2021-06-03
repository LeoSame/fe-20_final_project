/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentOperation } from '../../../../store/reviews/operations';
import styles from './Comment.module.scss';
import CommentUpdateForm from './CommentUpdateForm';
import { getCustomerSelector } from '../../../../store/customer/selectors';
import Icons from '../../../../components/Icons/Icons';

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const currentCustomer = useSelector(getCustomerSelector);
  const customerLogin = currentCustomer.login;

  const handleDelete = deleteID => dispatch(deleteCommentOperation(deleteID));
  const handleUpdate = () => setShowUpdateForm(true);
  return (
    <li className={styles.comment}>
      <div className={styles.customer}>
        {comment.customer.firstName} {comment.customer.lastName}
      </div>
      <div className={styles.row}>
        <Icons type='commas' color='#37b7fa' filled width={15} height={15} />
        <p className={styles.commentText}>{comment.content}</p>
        <Icons type='commas' color='#37b7fa' filled width={15} height={15} />
      </div>
      {customerLogin === comment.customer.login && (
        <button type='button' onClick={() => handleDelete(comment._id)} className={styles.deleteBtn}>
          Удалить
        </button>
      )}
      {customerLogin === comment.customer.login && !showUpdateForm && (
        <button type='button' onClick={handleUpdate} className={styles.updateBtn}>
          Изменить
        </button>
      )}
      {showUpdateForm && <CommentUpdateForm commentID={comment._id} setShowUpdateForm={setShowUpdateForm} />}
    </li>
  );
};
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};
export default Comment;
