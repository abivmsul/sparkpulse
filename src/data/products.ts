// src/data/products.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 'ultrabook-pro-15',
    name: 'UltraBook Pro 15',
    price: 1299.99,
    image: '/assets/products/ultrabook-pro-15.jpg',
    category: 'laptops',
  },  {
    id: 'ultrabook-pro-15d',
    name: 'UltraBook Pro 15',
    price: 500.99,
    image: '/assets/products/ultrabook-pro-15.jpg',
    category: 'laptops',
  },
  {
    id: 'gaming-beast-x',
    name: 'Gaming Beast X',
    price: 1499.99,
    image: '/assets/products/gaming-beast-x.jpg',
    category: 'desktops',
  },
  {
    id: 'wireless-headset-z',
    name: 'Wireless Headset Z',
    price: 199.99,
    image: '/assets/products/headset-z.jpg',
    category: 'accessories',
  },
  // …add as many as you like
];
