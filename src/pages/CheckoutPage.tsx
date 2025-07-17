import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate payment processing here
    // For now, simulate success:
    alert('ትዕዛዝዎ በተሳካ ሁኔታ ተፈፅሟል!');
    clearCart();
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Shipping & Payment Form */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            required
            className="w-full border rounded px-3 py-2 col-span-2"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            required
            className="w-full border rounded px-3 py-2 col-span-2"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full border rounded px-3 py-2 col-span-2"
          />
          {/* <input
            name="postcode"
            value={form.postcode}
            onChange={handleChange}
            type="text"
            placeholder="Postal Code"
            required
            className="w-full border rounded px-3 py-2"
          /> */}
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            type="text"
            placeholder="City"
            required
            className="w-full border rounded px-3 py-2 col-span-2"
          />
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            type="text"
            placeholder="Address"
            required
            className="w-full border rounded px-3 py-2 col-span-2"
          />
          {/* <input
            name="country"
            value={form.country}
            onChange={handleChange}
            type="text"
            placeholder="Country"
            required
            className="w-full border rounded px-3 py-2"
          /> */}
        </div>

        {/* Payment Placeholder */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
          {/* You can replace this with Stripe Elements or other gateway UI */}
          <p className="text-gray-600">Payment integration coming soon.</p>
        </div>

        <button
          type="submit"
        //   className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold py-3 rounded-lg transition"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded-lg"
        >
          Place Order  {total.toFixed(2)} ብር
        </button>
      </form>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="divide-y">
          {items.map(item => (
            <div key={item.id} className="flex justify-between py-3">
              <span>{item.name} × {item.quantity}</span>
              <span>{(item.price * item.quantity).toFixed(2)} ብር</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total:</span>
          <span>{total.toFixed(2)} ብር</span>
        </div>
      </div>
    </div>
  );
}
