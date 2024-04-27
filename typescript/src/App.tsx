// *Base
import { Outlet } from 'react-router-dom';

// *Components
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className='mt-[56px]'>
        <Outlet />
      </main>
    </>
  );
};

export default App;
