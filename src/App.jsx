import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import  { 
  Register, 
  Login, 
  Landing, 
  HomeLayout, 
  About,
  Products,
  Cart,
  Checkout,
  Orders,
  SingleProduct,
  Error } from './pages'

import { ErrorElement } from './components';

// loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as allProductsLoader } from './pages/Products';
import { loader as checkoutLoader } from './pages/Checkout';
import { loader as ordersLoader } from './pages/Orders';



// actions
import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { action as checkoutAction } from './components/CheckoutForm';

import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register/>,
    errorElement: <Error/>,
    action: registerAction
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <Error/>,
    action: loginAction(store)
  },
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing/>,
        loader: landingLoader,
        errorElement: <ErrorElement/>,
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'products',
        element: <Products/>,
        errorElement: <ErrorElement/>,
        loader: allProductsLoader
      },
      {
        path: 'products/:id',
        element: <SingleProduct/>,
        errorElement: <ErrorElement/>,
        loader: singleProductLoader
      },
      {
        path: 'orders',
        element: <Orders/>,
        loader: ordersLoader(store)
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'checkout',
        element: <Checkout/>,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
    ]
  }
])

const App = () => {
  return <RouterProvider router={ router }/>
}
export default App