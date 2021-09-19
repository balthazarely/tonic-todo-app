import React from 'react';
import { Layout } from '../components/Layout';

export const About = () => {
  return (
    <Layout>
      <>
        This app was built using React and TypeScript, and uses TailWindCSS for
        the styles. The todos are saved to local storage, so the date persists.
      </>
    </Layout>
  );
};
