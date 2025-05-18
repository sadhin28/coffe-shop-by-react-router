import { Outlet } from "react-router-dom";
import './App.css'
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
  import { ToastContainer } from 'react-toastify';

function App() {


  return (
     <div className="w-11/12 mx-auto">
         <Nav></Nav>
          <div className="min-h-[calc(100vh-300px)] max-w-500 mx-auto">
            <Outlet />
          </div>
         <Footer></Footer>
          <ToastContainer position="top-center"/>
     </div>
  )
}

export default App
