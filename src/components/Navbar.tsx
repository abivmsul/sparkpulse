import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">SparkPulse</Link>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
