import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import About from "./pages/About.jsx";
import { DarkModeProvider } from './DarkModeContext';
import Timeline from './pages/Timeline.jsx'
import Helmet from 'react-helmet';

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
      <Helmet>
        <title>baahct - portfolio</title>
        <link rel="icon" type="image/png" href="Avatar.png"/>
  </Helmet>
      <DarkModeProvider>
             <RouterProvider router={router} />
      </DarkModeProvider>
 
    </div>


  );
}