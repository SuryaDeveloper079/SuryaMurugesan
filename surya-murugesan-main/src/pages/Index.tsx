
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import ThreeBackground from "@/components/ui/ThreeBackground";

const Index = () => {
  return (
    <div className="flex w-full relative">
      {/* 3D Background covering entire portfolio */}
      <ThreeBackground />
      
      <Sidebar />
      
      <main className="flex-1 ml-0 md:ml-64 relative z-10">
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        
        <footer className="py-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Surya Murugesan. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
