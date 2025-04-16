import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Next.js v15 Sample</h1>
      <Button label="Click me" onClick={() => alert('Button clicked!')} />
      <p>
        Go to <Link href="/about">About Page</Link>
      </p>
    </div>
  );
}

export default HomePage