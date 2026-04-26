import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import GlobalTrade from './components/GlobalTrade';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VirtualAssistant from './components/VirtualAssistant';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <GlobalTrade />
        <Contact />
      </main>
      <Footer />
      <VirtualAssistant />
    </div>
  );
}

