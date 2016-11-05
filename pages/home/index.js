
import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import PhotoUpload from '../../components/PhotoUpload';
import s from './styles.css';

const Home = () => {
  return (
    <Layout className={s.content}>
      <PhotoUpload />
    </Layout>
  );
}

export default Home;
