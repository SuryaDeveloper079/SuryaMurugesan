
import ProjectCard from "../ui/ProjectCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Website Development",
      description: "A fully-featured e-commerce platform built with Java Spring Boot and React",
      technologies: ["Java", "Spring Boot", "React", "REST API", "MySQL"],
      achievements: [
        "Developed a scalable platform with Java Spring Boot backend and React frontend",
        "Implemented comprehensive REST APIs for product management and user authentication",
        "Created responsive design with modern UI/UX principles",
        "Improved load speed by 30% and order processing efficiency by 20%"
      ],
      liveUrl: "https://your-ecommerce-demo.com",
      githubUrl: "https://github.com/SuryaDeveloper079/ecommerce-project"
    },
    {
      title: "Coal Mine Safety System",
      description: "A rugged safety alert system for coal mine environments using embedded technology",
      technologies: ["Embedded C", "Rugged Board A5D2X", "MPU6050", "MQ-7", "GPS (NEO-6M)"],
      achievements: [
        "Developed a robust safety system for hazardous mine environments",
        "Integrated MPU6050 accelerometer, MQ-7 carbon monoxide sensor, and GPS module",
        "Implemented real-time hazard detection algorithms and alert system",
        "Created precise location tracking for emergency response"
      ],
      githubUrl: "https://github.com/SuryaDeveloper079/coal-mine-safety"
    }
  ];

  return (
    <section id="portfolio" className="bg-gradient-to-br from-gray-50/80 to-blue-50/50 relative overflow-hidden backdrop-blur-sm">
      <div className="content-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in both software development and embedded systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              achievements={project.achievements}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="https://github.com/SuryaDeveloper079" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
