import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Products from '@/components/sections/products';
import Locations from '@/components/sections/locations';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Products />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
