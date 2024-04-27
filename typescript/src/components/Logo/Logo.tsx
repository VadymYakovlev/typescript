// import { memo } from 'react';
// import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';

// const Logo = memo(() => {
//   const { t } = useTranslation();

//   return (
//     <Link to='/' className='link text-xl'>
//       {t('welcome')}
//     </Link>
//   );
// });

// export default Logo;

import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const Logo = memo(() => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage('en', (err, t) => {
      if (err) return console.log('error', err);
      t('welcome');
    });
  };

  return (
    <Link to='/' className='link text-xl' onClick={changeLanguage}>
      {t('welcome')}
    </Link>
  );
});

export default Logo;
