import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Pokemon from "./pages/Pokemon"
import Books from "./pages/Books"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/movies',
          element: <Movies/>
        },
        {
          path: '/pokemons',
          element: <Pokemon/>
        },
        {
          path: '/library',
          element: <Books/>
        },
      ]
    }
  ])

  return (
    <>
          <RouterProvider router={router} />
    </>
  )
}

export default App
