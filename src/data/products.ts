export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}
export const products: Product[] = [
  {
    id: 'Gen-z-pro-15',
    name: 'Gen z Pro 15',
    price: 1299.99,
    image: '/assets/products/laptop.png',
    category: 'laptops',
    description: "A sleek and powerful ultrabook with a 15-inch Retina display, 16GB RAM, and a lightning-fast SSD."
  },
  {
    id: 'ultrabook-pro-15d',
    name: 'UltraBook Pro 15D',
    price: 500.99,
    image: '/assets/products/ultrabook-pro-15.jpg',
    category: 'laptops',
    description: "Affordable variant of the UltraBook Pro series with decent performance for everyday tasks."
  },
  {
    id: 'gaming-beast-x',
    name: 'Gaming Beast X',
    price: 1499.99,
    image: '/assets/products/gaming-beast-x.jpg',
    category: 'desktops',
    description: "An extreme gaming desktop powered by RTX graphics, liquid cooling, and RGB case lighting."
  },
  {
    id: 'wireless-headset-z',
    name: 'Wireless Headset Z',
    price: 199.99,
    image: '/assets/products/headset-z.jpg',
    category: 'accessories',
    description: "Comfortable, long-lasting wireless headset with crystal-clear mic and immersive surround sound."
  },
  {
    id: 'tablet-lite-10',
    name: 'Tablet Lite 10',
    price: 299.99,
    image: '/assets/products/tablet-lite-10.jpg',
    category: 'tablets',
    description: "Portable and powerful 10-inch tablet with long battery life and stylus support."
  },
  {
    id: 'smartwatch-fitness-x',
    name: 'Smartwatch Fitness X',
    price: 149.99,
    image: '/assets/products/smartwatch-fitness-x.jpg',
    category: 'accessories',
    description: "Track your steps, sleep, and heart rate with this stylish and waterproof fitness smartwatch."
  },
  {
    id: 'ultrawide-monitor-34',
    name: 'UltraWide Monitor 34"',
    price: 499.99,
    image: '/assets/products/ultrawide-monitor-34.jpg',
    category: 'accessories',
    description: "Massive 34-inch curved display perfect for productivity and immersive gaming."
  },
  {
    id: 'mechanical-keyboard-rgb',
    name: 'Mechanical Keyboard RGB',
    price: 89.99,
    image: '/assets/products/mechanical-keyboard-rgb.jpg',
    category: 'keyboard',
    description: "Tactile keys and full RGB lighting for gaming and typing performance."
  },
  {
    id: 'student-laptop-lite',
    name: 'Student Laptop Lite',
    price: 399.99,
    image: '/assets/products/student-laptop-lite.jpg',
    category: 'laptops',
    description: "Lightweight and affordable laptop designed for students and basic computing."
  },
  {
    id: 'creator-desktop-max',
    name: 'Creator Desktop Max',
    price: 1899.99,
    image: '/assets/products/creator-desktop-max.jpg',
    category: 'desktops',
    description: "Designed for professionals, this workstation handles 3D rendering, video editing, and more."
  }
];
