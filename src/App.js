// import { Link, Outlet } from "react-router-dom";
import './App.css';
import Redux from "./Materi/Redux";

function App() {
  return (
    <div className="App">
      {/* <h1>Belajar Routing</h1>

      <nav>
       <Link to="/home" className="mr">Home</Link>
       <Link to="/about" className="mr">About</Link>
       <Link to="/category/makanan" className="mr">Makanan</Link>
       <Link to="/category/minuman" className="mr">Minuman</Link>
      </nav>  

      <Outlet />  */}
      <Redux />
    </div>
  );
}

export default App;
