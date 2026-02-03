import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Map from "./components/Map";
import About from "./components/About";
// Importe os outros conforme formos finalizando:;
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Map />
      <About />
      
      {/* Os próximos blocos entrarão aqui:
          <Footer /> 
      */}
    </main>
  );
}