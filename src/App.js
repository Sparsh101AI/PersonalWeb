import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Myjourney } from "./components/Myjourney";
import { Footer } from "./components/Footer";
import { Aboutme } from "./components/Aboutme";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner /> //change banner
      <Aboutme/>
    <adder/>
      <Skills />
      <Projects />
      <Myjourney />
      <Footer />
    </div>
  );
}

export default App;
