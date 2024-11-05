import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, Package, MapPin } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Navbar() {
  const cart = useStore((state) => state.cart);
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Books",
    "Home & Kitchen",
    "Sports",
    "Toys",
  ];

  return (
    <div className="bg-gray-900">
      {/* Main Navbar */}
      <div className="bg-gray-900 pb-1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <Link to="/" className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-white" />
              <span className="font-bold text-xl text-white">ModernShop</span>
            </Link>

            {/* Location */}
            <div className="hidden lg:flex items-center text-white space-x-1">
              <MapPin className="h-5 w-5" />
              <div className="text-sm">
                <p className="text-gray-400">Deliver to</p>
                <p className="font-bold">India</p>
              </div>
            </div>

            {/* Search Bar with Category and Icon */}
            <div className="flex items-center flex-1 max-w-3xl mx-6">
              <select className="w-20 h-10 rounded-l-md border border-gray-300 bg-gray-100 text-gray-700 px-2 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400">
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-grow h-10 px-3 border-t border-b border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
              />
              <button className="h-10 w-12 bg-orange-400 hover:bg-orange-500 rounded-r-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                <Search className="h-5 w-5 text-gray-800" />
              </button>
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative flex items-center text-white">
              <div className="flex items-end">
                <ShoppingCart className="h-8 w-8" />
                <span className="absolute -top-1 -right-2 bg-orange-400 text-gray-900 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                  {cartItemsCount}
                </span>
                <span className="ml-2 font-bold">Cart</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-6 py-2 text-sm">
            <button className="flex items-center hover:text-orange-400">
              <Menu className="h-5 w-5 mr-1" />
              All
            </button>
            {categories.slice(1).map((category) => (
              <button
                key={category}
                className="hidden md:block hover:text-orange-400"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
