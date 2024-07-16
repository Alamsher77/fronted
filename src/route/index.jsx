import {createBrowserRouter,Navigate} from 'react-router-dom'
import App from '../App'
import Home from '../pages/home'
import AdminPanel from '../pages/adminPanel'
import AddProduct from '../pages/addProduct'
import AllUsers from '../pages/allusers'
import NoPage from '../pages/noPages'
import SignupForm from '../pages/SignupForm'
import AddCategry from '../pages/addCategry'
import Product from '../pages/product'
import Cart from '../pages/cart'
 const usersData = JSON.parse(localStorage.getItem('users'))
const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App />,
    children: [
      {
         path : "",
         element: <Home />
       },
      {
    path:"signup",
    element:<SignupForm/>,
    },
      {
        path:'product',
        element:<Product/>,
        children:[
          {
            path:':productId',
            element:<Product/>
          } 
          ]
      },
      {
         path: "adminPanel",
         element :<AdminPanel />,
         children :[
            {
              path :"addproduct",
              element : <AddProduct />
            },
            {
            path : "allUsers",
            element : <AllUsers />
            },
            {
              path:"addcategry",
              element:<AddCategry/>
            }
           ],
           
       },
      {
         path:"cart",
         element:<Cart/>
       }
       ]
  },
  {
    path :"*",
    element:<NoPage />
  }
]);
export default router