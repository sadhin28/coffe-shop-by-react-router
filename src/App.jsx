import { Outlet } from "react-router-dom";
import './App.css'
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";


function App() {


  return (
     <div className="w-11/12 mx-auto">
         <Nav></Nav>
          <div className="min-h-screen">
            <Outlet />
          </div>
         <Footer></Footer>
     </div>
  )
}

export default App
