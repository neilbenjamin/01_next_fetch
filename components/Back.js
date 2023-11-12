import React from 'react';
import Link from 'next/link';

const BackButton = () => {
  return (
    <div>
      <Link href="/">
        <a style={{ margin: '3rem' }}>Back</a>
      </Link>
    </div>
  );
};

export default BackButton;
