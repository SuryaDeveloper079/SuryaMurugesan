
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  className 
}: ServiceCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow",
      className
    )}>
      {icon && (
        <div className="mb-4 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
