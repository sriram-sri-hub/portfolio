import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="pt-24 space-y-20">

        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </main>

    </div>
  );
}

export default App;