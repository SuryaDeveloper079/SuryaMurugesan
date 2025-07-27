
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  achievements,
  liveUrl,
  githubUrl,
  className 
}: ProjectCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium border border-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="space-y-2 mb-6">
          {achievements.map((achievement, index) => (
            <p key={index} className="text-sm text-gray-600 flex items-baseline">
              <span className="text-primary mr-2 font-bold">•</span>
              <span>{achievement}</span>
            </p>
          ))}
        </div>

        {(liveUrl || githubUrl) && (
          <div className="flex gap-3 pt-4 border-t border-gray-100">
            {liveUrl && (
              <Button size="sm" className="gap-2" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3" />
                  Live Demo
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button size="sm" variant="outline" className="gap-2" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
