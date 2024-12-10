import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Services />
        <Process />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/** Comming soon overlay */}
      <div className="fixed inset-0 backdrop-blur-xl bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-gradient-to-br from-indigo-50/90 to-indigo-200/60 p-8 lg:p-20 rounded-lg h-[90vh] w-[90vw]">
          <h1 className="text-5xl lg:text-6xl font-bold text-indigo-500">Avenory</h1>
          <h2 className="text-3xl lg:text-5xl font-bold text-indigo-900 mt-5 lg:mt-16 mb-5">Coming Soon ! &#128640;</h2>
          <p className="text-xl lg:text-3xl text-indigo-800">We are working hard to bring you a new website. Stay tuned!</p>
          <div className="flex justify-center lg:justify-end items-center h-full">
            <div className="mb-40 h-[100vh] w-[50vh] bg-undulate bg-cover bg-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;