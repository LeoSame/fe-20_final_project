import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addComment, updateComment } from '../../../../../http/commentAPI';
import styles from './ReviewForm.module.scss';
import ButtonBlock from '../../../../../components/Forms/ButtonBlock/ButtonBlock';

const ReviewForm = ({ review, productId, updateReview, reviewId, setRefreshReviews }) => {
  const [messageServer, setmessageServer] = useState(null);

  const validationSchema = Yup.object({
    content: Yup.string().min(10, 'Укажите отзыв длиннее 10 символов').required('Оставьте свой отзыв о товаре'),
  });

  return (
    <>
      <Formik
        initialValues={{
          content: review?.content || '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (updateReview) {
            updateComment(reviewId, values, productId)
              .then(res => {
                if (res.status === 200) {
                  setmessageServer(<span style={{ color: 'green' }}>Отзыв успешно добавлен!</span>);
                }
                setRefreshReviews(true);
              })
              .catch(err => {
                setmessageServer(<span>{Object.values(err.data).join('')}</span>);
              });
          } else {
            addComment({ product: productId, ...values }, productId)
              .then(res => {
                if (res.status === 200) {
                  setmessageServer(<span style={{ color: 'green' }}>Отзыв успешно изменён!</span>);
                }
                setRefreshReviews(true);
              })
              .catch(err => {
                setmessageServer(<span>{Object.values(err.data).join('')}</span>);
              });
          }

          resetForm({});
          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <div className={styles.textareaContainer}>
              <Field
                as='textarea'
                className={styles.textarea}
                name='content'
                placeholder='Введите Ваш отзыв'
                rows={5}
              />
            </div>
            {updateReview ? (
              <ButtonBlock buttonTitle='Изменить' messageServer={messageServer} />
            ) : (
              <ButtonBlock buttonTitle='Добавить' messageServer={messageServer} />
            )}
          </Form>
        </div>
      </Formik>
    </>
  );
};

ReviewForm.propTypes = {
  review: PropTypes.object,
  productId: PropTypes.string,
  updateReview: PropTypes.bool,
  reviewId: PropTypes.string,
  setRefreshReviews: PropTypes.func.isRequired,
};

ReviewForm.defaultProps = {
  review: {},
  productId: '',
  updateReview: false,
  reviewId: '',
};

export default ReviewForm;
