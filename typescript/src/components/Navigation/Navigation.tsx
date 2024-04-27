import { memo } from 'react';
import LIST from './Navigation.data';
import { Link } from 'react-router-dom';

const Navigation = memo(() => {
  return (
    <nav>
      <ul className='flex item-center gap-4'>
        {LIST.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </nav>
  );
});

const Item = memo(({ to, title }: { title: string; to: string }) => {
  return (
    <li>
      <Link to={to} className='link p-2'>
        {title}
      </Link>
    </li>
  );
});

export default Navigation;
