import React, { useEffect } from 'react';
import Applayout from '../components/Applayout';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_CONTENT_REQUEST } from '../reducers/content';

const View = ({ match }) => {
  const dispatch = useDispatch();
  const { loadContentDone } = useSelector((state) => state.content);
  useEffect(() => {
    dispatch({
      type: LOAD_CONTENT_REQUEST,
      data: match.params.data,
    });
  }, []);
  return (
    <Applayout>
      {loadContentDone && (
        <section style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>{loadContentDone.title}</h1>
          <div>
            <img src={loadContentDone.imageSrc} />
            <div>{loadContentDone.text}</div>
          </div>
        </section>
      )}
    </Applayout>
  );
};

export default View;
