import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import schema from '../schema';
import { updateColor } from '../../../../http/colorsAPI';
import { getColorsOperation } from '../../../../store/colors/operations';

const UpdateColorsForm = ({ color, setOpenForm }) => {
  const { name, cssValue, _id: id } = color;

  const [messageServer, setmessageServer] = useState(null);
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          name: name || '',
          cssValue: cssValue || '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          updateColor(id, values)
            .then(res => {
              if (res.status === 200) {
                setOpenForm(false);
              }
              dispatch(getColorsOperation());
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });

          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <MyTextInput label='Название' name='name' type='text' placeholder='Название цвета' tabIndex='0' />
            <MyTextInput label='HEX цвет' name='cssValue' type='text' placeholder='Значение цвета' tabIndex='0' />
            <ButtonBlock buttonTitle='Изменить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

UpdateColorsForm.propTypes = {
  color: PropTypes.object.isRequired,
  setOpenForm: PropTypes.func.isRequired,
};

export default UpdateColorsForm;