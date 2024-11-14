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
        element: <Landing/>
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