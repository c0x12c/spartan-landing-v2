import * as React from 'react';

interface IMainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FunctionComponent<IMainTemplateProps> = (props) => {
  const { children } = props;

  return <React.Fragment>{children}</React.Fragment>;
};

export default MainTemplate;
