import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder.jsx';
import Username from '../features/user/Username.jsx';

const Header = () => {
  return (
    <header className="border-b border-stone-500 bg-yellow-500 px-4  py-4 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
