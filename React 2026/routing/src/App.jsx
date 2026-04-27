import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Movies from "./pages/Movies"

function App(){
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/movies',
      element:<Movies/>
    }
  ])

  return(
    <RouterProvider router={router} />
  )
}

export default App