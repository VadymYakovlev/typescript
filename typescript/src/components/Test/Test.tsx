import React from 'react';

type Props = {
  title: string;
};

const Test: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Test;
