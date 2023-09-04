import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import About from "./pages/About.jsx";
import { DarkModeProvider } from './DarkModeContext';
import Timeline from './pages/Timeline.jsx'

export default function App() {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/timeline",
      element: <Timeline/>,
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