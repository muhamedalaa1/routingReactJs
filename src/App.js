
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
// import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
// import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import Notfound from './components/NotFound/Notfound';
import Layout from './components/Layout/Layout';
import Portfolio from './components/Portfolio/Portfolio';


 const router = createHashRouter([

   { path: "", element: <Layout /> , children : [
    { path: "home", element: <Home /> },
    { path: "About", element: <About /> },
    { path: "Contact", element: <Contact /> },
    { path: "Portfolio", element: <Portfolio /> },
    { path: "*", element: <Notfound/> },
  ]},
   
   
 ]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
