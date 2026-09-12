import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/layouts/RootLayout.jsx'
import Product from './pages/Product.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import AddProduct from './pages/AddProduct.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/products',
        element: <Product />
      },
      {
        path: '/products/:id',
        element: <ProductDetail />
      },
      {
        path: '/add-product',
        element: <AddProduct />
      }
    
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
