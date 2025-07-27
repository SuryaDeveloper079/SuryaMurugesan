
import ServiceCard from "../ui/ServiceCard";
import { Cpu, Code, Layers } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Java Development",
      description: "Robust backend systems, microservices architecture, and efficient API design with Java and Spring Boot.",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      title: "Embedded Systems",
      description: "Real-time firmware development, sensor integration, and microcontroller programming for custom hardware solutions.",
      icon: <Cpu className="w-8 h-8" />,
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end application development with responsive frontends using React and robust backends in Java Spring Boot.",
      icon: <Layers className="w-8 h-8" />,
      gradient: "from-green-400 to-teal-500",
      bgGradient: "from-green-50 to-teal-50"
    }
  ];

  return (
    <section id="services" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-32 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute right-20 bottom-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
        <div className="absolute left-1/2 top-20 w-24 h-24 bg-indigo-200/15 rounded-full blur-xl"></div>
      </div>

      <div className="content-section relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Delivering comprehensive technology solutions from concept to deployment
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${service.bgGradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50`}
            >
              {/* Gradient background overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 group-hover:text-gray-900 transition-colors">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">{service.description}</p>
                
                {/* Decorative arrow */}
                <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
