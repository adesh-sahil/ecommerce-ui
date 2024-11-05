import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="relative">
        <div className="h-[400px] w-full bg-gradient-to-r from-blue-500 to-purple-600">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&q=80"
            alt="Hero"
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Spring Deals</h1>
              <p className="text-xl mb-6">Up to 70% off on selected items</p>
              <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 font-bold py-3 px-8 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Deal Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {['Today\'s Deals', 'Best Sellers', 'New Arrivals', 'Member Deals'].map((category) => (
            <div key={category} className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">{category}</h3>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                See all deals <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <a href="#" className="text-blue-600 hover:text-blue-800">See all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Recommended for You</h2>
            <a href="#" className="text-blue-600 hover:text-blue-800">See all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-4">Electronics</h3>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80"
                alt="Electronics"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80"
                alt="Electronics"
                className="rounded-lg"
              />
            </div>
            <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 block">See more</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-4">Fashion</h3>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80"
                alt="Fashion"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&q=80"
                alt="Fashion"
                className="rounded-lg"
              />
            </div>
            <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 block">See more</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-4">Home & Kitchen</h3>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&q=80"
                alt="Home"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1586208958839-06c17cacdf08?w=400&q=80"
                alt="Kitchen"
                className="rounded-lg"
              />
            </div>
            <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 block">See more</a>
          </div>
        </div>
      </div>
    </div>
  );
}