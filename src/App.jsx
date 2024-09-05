import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./home";
import Services from "./services";
import About from "./about";
import Contact from "./contact";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/services" element={<Services/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;