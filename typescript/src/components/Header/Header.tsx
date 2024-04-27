// * Components
import { memo } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Language from '../Language/Language';

// * Styles

const Header = memo(() => {
  return (
    <header className='fixed top-0 left-0 right-0 w-full bg-blue-900 text-white z-[900]'>
      <div className='wrapper py-4 flex justify-between'>
        <Logo />
        <Navigation />
        <Language />
      </div>
    </header>
  );
});

export default Header;
