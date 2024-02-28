import React, { Suspense } from 'react';

// Lazy load your Card component
const LazyCard = React.lazy(() => import('./Card'));

// Define a fallback component to display while the lazy component is loading
const Loader = () => <div>Loading...</div>;

const LazyCardWrapper = (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <LazyCard {...props} />
    </Suspense>
  );
};

export default LazyCardWrapper;