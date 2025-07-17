import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {

  const navigate = useNavigate();

  const { items, addToCart, decrementFromCart, removeFromCart } = useCart();

  // Compute cart total
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <Link
          to="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {items.map(item => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full sm:w-32 h-32 object-cover"
            />

            <div className="flex-1 p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.price.toFixed(2)} ብር</p>

              {/* Quantity Controls */}
              <div className="mt-4 flex items-center space-x-2">
                <button
                  onClick={() => decrementFromCart(item.id)}
                  className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Subtotal & Remove */}
            <div className="p-4 flex flex-col items-end space-y-4">
              <p className="text-lg font-semibold">
                {(item.price * item.quantity).toFixed(2)} ብር
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 flex justify-between items-center">
        <span className="text-2xl font-bold">Total:</span>
        <span className="text-2xl font-semibold">{total.toFixed(2)} ብር</span>
      </div>

      {/* Checkout Button */}
      <div className="mt-6 text-right">
         <button
        onClick={() => navigate('/checkout')}
        // className="bg-gold hover:bg-gold/90 text-navy font-semibold py-3 px-6 rounded-lg"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Proceed to Checkouddt
      </button>
      </div>
    </div>
  );
}
