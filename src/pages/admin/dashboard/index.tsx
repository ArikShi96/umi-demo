import React, { useCallback } from 'react';
import { Button } from 'antd';

export default () => {
  const handleClick = useCallback(() => {
    alert('123');
  }, []);
  return (
    <div>
      <h1>dashboard</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};
