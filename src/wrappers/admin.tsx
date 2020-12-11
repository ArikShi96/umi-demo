import React from 'react';
import { Redirect } from 'umi';

export default (props: any) => {
  const isAdmin = true;
  if (isAdmin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/403" />;
  }
};
