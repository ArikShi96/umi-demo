import React, { useEffect } from 'react';
import { history } from 'umi';

export default (props: any) => {
  useEffect(() => {
    if (props.location.pathname === '/admin') {
      history.push('/admin/dashboard');
    }
  }, []);
  return (
    <div>
      <div>admin header</div>
      {props.children}
      <div>admin footer</div>
    </div>
  );
};
