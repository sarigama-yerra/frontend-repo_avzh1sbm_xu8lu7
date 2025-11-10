import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0b10] text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
