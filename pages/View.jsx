import React, { useEffect } from 'react';
import Applayout from '../components/Applayout';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_CONTENT } from '../reducers/content';

const View = ({ match }) => {
  const dispatch = useDispatch();
  const { loadContent } = useSelector((state) => state.content);
  useEffect(() => {
    dispatch({
      type: LOAD_CONTENT,
      data: match.params.data,
    });
  }, []);
  return (
    <Applayout>
      {loadContent && (
        <section style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>{loadContent.title}</h1>
          <div>
            <img src={loadContent.imageSrc} />
            <div>{loadContent.text}</div>
          </div>
        </section>
      )}
    </Applayout>
  );
};

export default View;
