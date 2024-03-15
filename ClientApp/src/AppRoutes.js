import { Home } from "./components/Home";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/Carts/Cart";


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
  }
];


export default AppRoutes;


