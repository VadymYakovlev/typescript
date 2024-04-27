// * Base
import { ReactNode, Suspense, memo } from 'react';

// * Components
import Loading from '../Loading/Loading';

const Element = memo(({ component }: { component: ReactNode }) => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
});

export default Element;
