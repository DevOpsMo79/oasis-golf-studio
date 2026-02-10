import { IMAGE_PLACEHOLDER_MODE } from "@/lib/config";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  id: number;
  className?: string;
  route?: string;
  section?: string;
}

export function ImagePlaceholder({ id, className, route, section }: ImagePlaceholderProps) {
  if (!IMAGE_PLACEHOLDER_MODE) return null;

  return (
    <div 
      className={cn(
        "bg-secondary/50 border-2 border-dashed border-primary/30 rounded-xl flex flex-col items-center justify-center min-h-[100px] w-full relative overflow-hidden group hover:border-primary/50 transition-colors",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-2xl font-bold font-display text-primary">IMG #{id.toString().padStart(2, '0')}</span>
        {section && (
          <span className="text-xs text-muted-foreground uppercase tracking-widest px-2 text-center">
            {route && `${route} > `}{section}
          </span>
        )}
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-2 right-2 opacity-10">
        <span className="text-4xl font-bold select-none">#{id}</span>
      </div>
    </div>
  );
}
