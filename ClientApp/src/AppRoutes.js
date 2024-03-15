import { Home } from "./components/Home";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/Carts/Cart";
import CheckoutPage from './components/Checkout/CheckoutPage';


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/product/:id',
    element: <ProductDetails />
  },
  {
    path: '/cart',
    element: <Cart/>
  },
  {
    path: '/checkout',
    element: <CheckoutPage/>
  }
];


export default AppRoutes;


