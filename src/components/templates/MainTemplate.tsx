import * as React from 'react';
import { Footer, Header } from '../molecules';

interface IMainTemplateProps {
  children: React.ReactNode;
}

export const MainTemplate: React.FunctionComponent<IMainTemplateProps> = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
