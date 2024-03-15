import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import ProductDetails from "./components/Products/ProductDetails";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/product/:id',
    element: <ProductDetails />
  }


];


export default AppRoutes;