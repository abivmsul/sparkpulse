// src/pages/HomePage.tsx
import HeroBanner from '../components/HeroBanner';
import CategoryCard from '../components/CategoryCard';

const categories = [
  { name: 'Laptops', image: '/assets/laptop.png', link: '/products?cat=laptops' },
  { name: 'Keyboard', image: '/assets/keyboard.png', link: '/products?cat=keyboard' },
  { name: 'Monitors', image: '/assets/monitor.jpg', link: '/products?cat=monitors' },
  { name: 'Headphones', image: '/assets/headphone.png', link: '/products?cat=headphone' },
  { name: 'Accessories', image: '/assets/accessories.jpg', link: '/products?cat=accessories' },
  
  // add more as needed
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="/assets/hero-banner.jpg"
        title="Discover Premium Tech Accessories"
        subtitle="Fast & Free shipping • Best prices • Quality guaranteed"
        ctaText="Shop Now"
        ctaLink="/products"
      />

      {/* Featured Categories */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <CategoryCard
              key={cat.name}
              image={cat.image}
              name={cat.name}
              link={cat.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
