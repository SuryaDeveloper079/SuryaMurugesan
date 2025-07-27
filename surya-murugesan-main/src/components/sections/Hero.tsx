
import { ChevronRight, ArrowDownCircle, Code, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import SkillBadge from "../ui/SkillBadge";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";


export default function Hero() {
  const skills = ["Java", "Embedded C", "React", "STM32", "Spring Boot", "REST APIs"];
  const [typedText, setTypedText] = useState("");
  const fullText = "Crafting scalable software and embedded solutions.";
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 50);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50/80 via-blue-50/80 to-indigo-100/80">
      {/* Enhanced CSS Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full bg-grid-pattern opacity-3"></div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/60 via-transparent to-white/40"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        
        {/* Subtle animated particles */}
        <div className="absolute left-1/4 top-1/3 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/3 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse animate-float"></div>
        <div className="absolute left-2/3 top-1/4 w-1 h-1 bg-primary/20 rounded-full animate-ping"></div>
        <div className="absolute left-1/5 bottom-1/4 w-1 h-1 bg-blue-500/20 rounded-full animate-bounce"></div>
        <div className="absolute right-1/5 top-2/3 w-2 h-2 bg-purple-400/20 rounded-full animate-pulse animate-float-delayed"></div>
      </div>

      <div className="content-section relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto px-4">
          <div className="order-2 md:order-1 space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center space-x-2 animate-scale-in" style={{ animationDelay: "400ms" }}>
              <Badge variant="outline" className="px-3 py-1 text-xs font-medium border-primary/30 text-primary hover-scale">
                Software & Embedded Systems Developer
              </Badge>
            </div>
            
            <div className="animate-slide-in-right" style={{ animationDelay: "600ms" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 tracking-tight">
                Surya <span className="text-primary animate-fade-in" style={{ animationDelay: "800ms" }}>Murugesan</span>
              </h1>
              
              <div className="h-12 my-4 animate-fade-in" style={{ animationDelay: "1000ms" }}>
                <p className="text-xl text-gray-700 font-medium">
                  {typedText}<span className="animate-pulse">|</span>
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: "1200ms" }}>
              Passionate about innovation and technology that solves meaningful problems.
            </p>
            
            <div className="flex flex-wrap gap-2 my-8">
              {skills.map((skill, index) => (
                <SkillBadge 
                  key={index} 
                  name={skill} 
                  className="animate-fade-in hover-scale" 
                  style={{
                    animationDelay: `${1400 + index * 100}ms`
                  }} 
                />
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2 animate-scale-in" style={{ animationDelay: "2000ms" }}>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 font-medium hover-scale" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <a href="#about" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors gap-2 group mt-8 animate-fade-in story-link" style={{ animationDelay: "2200ms" }}>
              <span>Scroll down to learn more</span>
              <ArrowDownCircle className="h-5 w-5 animate-bounce group-hover:animate-none" />
            </a>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-scale-in" style={{ animationDelay: "300ms" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 bg-gradient-to-br from-white to-blue-50 p-1">
                <img src="https://i.postimg.cc/sX9sTcC5/profile.jpg" alt="Surya Murugesan" className="w-full h-full object-cover object-center rounded-full" />
              </div>
              
              {/* Profile image decorations */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg z-20">
                <div className="bg-primary rounded-full p-2">
                  <Cpu className="text-white h-5 w-5" />
                </div>
              </div>
              
              <div className="absolute -top-2 -left-2 bg-white rounded-full p-2 shadow-lg z-20">
                <div className="bg-blue-400 rounded-full p-2">
                  <Code className="text-white h-4 w-4" />
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-10 bg-white rounded-full p-2 shadow-lg z-20">
                <div className="bg-blue-500 rounded-full p-1">
                  <Globe className="text-white h-4 w-4" />
                </div>
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute -right-10 top-1/3 bg-white px-3 py-1 rounded-full shadow-lg z-20 text-xs font-medium text-primary border border-primary/10 animate-fade-in hover-scale" style={{ animationDelay: "1500ms" }}>React</div>
              <div className="absolute -left-16 bottom-1/3 bg-white px-3 py-1 rounded-full shadow-lg z-20 text-xs font-medium text-blue-500 border border-blue-200 animate-fade-in hover-scale" style={{ animationDelay: "1700ms" }}>Java</div>
              
              {/* Background decoration for the image */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-gradient-to-br from-primary/20 to-blue-300/30 rounded-full blur-sm -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for grid pattern and simplified animations */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-5px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(8px) translateX(-8px); }
          66% { transform: translateY(-5px) translateX(3px); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
