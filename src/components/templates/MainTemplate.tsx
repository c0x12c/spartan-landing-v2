import * as React from 'react';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';

interface IMainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FunctionComponent<IMainTemplateProps> = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainTemplate;
