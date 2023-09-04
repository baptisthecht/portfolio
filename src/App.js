import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import { DarkModeProvider } from './DarkModeContext';
import Soon from "./pages/Soon.jsx";

export default function App() {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/about",
      element: <Soon/>,
    },
    {
      path: "/timeline",
      element: <Soon/>,
    },
    {
      path: "/work",
      element: <Soon/>,
    },
    {
      path: "/more",
      element: <Soon/>,
    },
  ]);

  return (
    <div>
      <DarkModeProvider>
             <RouterProvider router={router} />
      </DarkModeProvider>
 
    </div>


  );
}