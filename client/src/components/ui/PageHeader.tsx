import { motion } from "framer-motion";
import { IMAGE_PLACEHOLDER_MODE } from "@/lib/config";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
  placeholderId?: number;
}

export function PageHeader({ title, description, image, placeholderId }: PageHeaderProps) {
  const showPlaceholder = IMAGE_PLACEHOLDER_MODE && placeholderId !== undefined;

  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      {image && !showPlaceholder && (
        <div className="relative w-full z-0 flex items-center justify-center bg-background h-[40vh] md:h-[50vh] lg:h-[70vh] max-h-[800px]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/10 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      )}

      {showPlaceholder && (
        <div className="absolute inset-0 z-0 h-[40vh] md:h-[50vh] lg:h-[70vh] max-h-[800px]">
          <ImagePlaceholder 
            id={placeholderId} 
            className="h-full rounded-none border-none bg-background/50" 
            section="Page Header"
          />
          <div className="absolute inset-0 bg-background/10" />
        </div>
      )}
      
      {/* Content */}
      <div className="container absolute z-10 px-4 text-center bottom-8 md:bottom-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-bold mb-4 text-white"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
