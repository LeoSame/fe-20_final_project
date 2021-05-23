/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ContainerPage from '../../components/ContainerPage/ContainerPage';
import { getPageOperation } from '../../store/pages/operations';
import { getPageSelector, pageLoadingSelector } from '../../store/pages/selectors';
import Loader from '../../components/Loader/Loader';

const Page = () => {
  const dispatch = useDispatch();
  const page = useSelector(getPageSelector);
  const pageLoading = useSelector(pageLoadingSelector);

  const params = useParams();

  useEffect(() => {
    dispatch(getPageOperation(params.id));
  }, [dispatch]);

  return (
    <ContainerPage>
      {pageLoading ? <Loader /> : <div dangerouslySetInnerHTML={{ __html: page.htmlContent }} />}
    </ContainerPage>
  );
};

export default Page;
