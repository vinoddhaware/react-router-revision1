import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Pokemon from "./pages/Pokemon"
import Books from "./pages/Books"

function App() {

  const router = createBrowserRouter([
    {
      path: '/react-router-revision1/',
      element: <AppLayout/>,
      children:[
        {
          path: '/react-router-revision1/react-router-revision1/',
          element: <Home/>
        },
        {
          path: '/react-router-revision1/react-router-revision1/movies',
          element: <Movies/>
        },
        {
          path: '/react-router-revision1/react-router-revision1/pokemons',
          element: <Pokemon/>
        },
        {
          path: '/react-router-revision1/react-router-revision1/library',
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
