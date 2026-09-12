
import { Card } from "flowbite-react";
import { Link } from "react-router";
import { getAllProducts } from "../../services/productApi";

export default function ProductCard({product}) {
  return (
    <Card className="max-w-sm overflow-hidden">
      <Link to={`/products/${product.id}`} className="block">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-48 w-full rounded-t-lg object-cover"
        />
      </Link>

      <div className="mt-4">
        <Link to='' className="block hover:underline">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </Link>

        <div className="mb-5 mt-2.5 flex items-center">
          <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            {product.category}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
          <a
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </Card>
  );
}
