import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Bookings from './pages/Bookings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/reservations",
    element: <Bookings/>,
  },
]);

function App() {

  return (
    <>
      <Header/>
      <main>
        <RouterProvider router={router}/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
