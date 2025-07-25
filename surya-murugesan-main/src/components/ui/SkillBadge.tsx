
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface SkillBadgeProps {
  name: string;
  className?: string;
  style?: CSSProperties;
}

export default function SkillBadge({ name, className, style }: SkillBadgeProps) {
  return (
    <div 
      className={cn(
        "px-3 py-1 rounded-full text-sm bg-secondary text-foreground font-medium transition-all hover:scale-105 hover:bg-primary hover:text-white",
        className
      )}
      style={style}
    >
      {name}
    </div>
  );
}
