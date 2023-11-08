import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home  from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Characters from "./components/Characters";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  return (
    <>

      <Navigation />
      <h1>React Router</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/characters" element={<Characters/>} />
        <Route path='/characters/:id' element={<CharacterDetails/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      <footer>All rights reserved</footer>
    </>
  );
}

export default App;
