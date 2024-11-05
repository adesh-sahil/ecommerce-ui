import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover object-center"
          />
          {product.stock < 20 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs">
              Only {product.stock} left
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-1 text-sm text-gray-500">({product.rating})</span>
          </div>
          <div className="flex items-baseline">
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            {product.price > 100 && (
              <span className="ml-2 text-sm text-gray-500">
                or ${(product.price / 12).toFixed(2)}/mo
              </span>
            )}
          </div>
          {product.price > 25 && (
            <p className="text-sm text-gray-500 mt-1">Free Prime Delivery</p>
          )}
        </div>
      </div>
    </Link>
  );
}