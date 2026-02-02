import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
// Importe os outros conforme formos finalizando:;
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      {/* Os próximos blocos entrarão aqui:
          <About />
          
          <Map />
          <Footer /> 
      */}
    </main>
  );
}