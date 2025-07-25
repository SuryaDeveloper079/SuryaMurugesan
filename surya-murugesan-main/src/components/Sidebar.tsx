
import { useState } from "react";
import { Github, Linkedin, Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [{
  id: "home",
  label: "Home",
  icon: "home"
}, {
  id: "about",
  label: "About",
  icon: "user"
}, {
  id: "experience",
  label: "Experience",
  icon: "briefcase"
}, {
  id: "portfolio",
  label: "Portfolio",
  icon: "layout"
}, {
  id: "contact",
  label: "Contact",
  icon: "mail"
}];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <button onClick={toggleSidebar} className="fixed top-4 right-4 z-50 bg-sidebar p-2 rounded-full md:hidden">
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
      </button>

      {/* Sidebar */}
      <aside className={cn("fixed top-0 left-0 h-full bg-sidebar text-white z-40 transition-all duration-300 ease-in-out", isOpen ? "w-64" : "w-0 md:w-64")}>
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Profile */}
          <div className="flex flex-col items-center py-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white mb-4">
              <img alt="Surya Murugesan" className="w-full h-full object-center object-fill" src="/lovable-uploads/470aac69-4576-49b0-93f0-4afbcd72474a.jpg" />
            </div>
            <h2 className="text-xl font-semibold">Surya Murugesan</h2>
            <p className="text-sm text-sidebar-accent mt-1">Software & Embedded Developer</p>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-1 px-4">
              {sidebarLinks.map(link => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="flex items-center py-2 px-4 rounded-lg hover:bg-sidebar-accent transition-colors" onClick={closeSidebar}>
                    <i className={`mr-3 bi bi-${link.icon}`}></i>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Social links */}
          <div className="py-6 flex justify-center space-x-4 border-t border-sidebar-border">
            <a href="https://suryamurugesan.dev" target="_blank" rel="noopener noreferrer" className="hover:text-sidebar-accent transition-colors" title="Website">
              <Globe className="h-5 w-5" />
            </a>
            <a href="https://github.com/SuryaDeveloper079" target="_blank" rel="noopener noreferrer" className="hover:text-sidebar-accent transition-colors" title="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/surya-murugesan-72a86b208" target="_blank" rel="noopener noreferrer" className="hover:text-sidebar-accent transition-colors" title="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
