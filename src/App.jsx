import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/Homepage";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]); 

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


// import HomePage from './pages/Homepage';
// import ContactPage from "./pages/ContactPage";
// import { createBrowserRouter, RouterProvider } from "react-router";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />
//   },
//   {
//     path: '/contact',
//     element: <ContactPage />
//   }
// ])

// function App(){
//   return <RouterProvider router={router}/>
// }

// export default App
