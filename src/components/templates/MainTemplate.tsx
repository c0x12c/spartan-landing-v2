import * as React from 'react';
import { Header } from '../molecules';

interface IMainTemplateProps {
  children: React.ReactNode;
}

export const MainTemplate: React.FunctionComponent<IMainTemplateProps> = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};
