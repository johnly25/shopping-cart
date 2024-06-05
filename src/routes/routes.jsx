import App from '../App.jsx'
import Store from './Store.jsx'
import Item from './Item.jsx'
import Home from './Home.jsx'
import api from '../data/api2.jsx'

const routes = [
    {
      path: "/",
      element: <App />,
      loader: async () => {
        // let response = await fetch('https://fakestoreapi.com/products')
        let response = await api;
        return response;
      },
      id: 'root'
      ,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "store",
          element: <Store />,
        },
        {
          path: 'store/item/:id',
          element: <Item />
        }
      ],
    },
  ]

export default routes;