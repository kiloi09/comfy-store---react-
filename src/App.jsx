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
// actions

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register/>,
    errorElement: <Error/>
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <Error/>
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
        element: <Products/>
      },
      {
        path: 'products/:id',
        element: <SingleProduct/>
      },
      {
        path: 'orders',
        element: <Orders/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'checkout',
        element: <Checkout/>
      },
    ]
  }
])

const App = () => {
  return <RouterProvider router={ router }/>
}
export default App