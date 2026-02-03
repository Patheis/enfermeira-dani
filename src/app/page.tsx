import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Map from "./components/Map";
import About from "./components/About";
import AppointmentForm from "./components/AppointmentForm";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Map />
      <AppointmentForm />
      <About />
      <Footer /> 
      <CookieBanner />
    </main>
  );
}