import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
  placeholderId?: number;
}

export function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <>
      {/* Banner — visual only, no text overlay */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "16/9", maxHeight: "520px", minHeight: "220px" }}
      >
        {/* Warm dark grid — base layer */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #1a1510 0%, #2a2118 40%, #1c1c1c 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #c8a96e 0px, transparent 1px, transparent 80px, #c8a96e 81px), repeating-linear-gradient(0deg, #c8a96e 0px, transparent 1px, transparent 80px, #c8a96e 81px)",
          }}
        />

        {/* Full-bleed photo — natural centered cover */}
        {image && (
          <div className="absolute inset-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              style={{ imageRendering: "auto" }}
            />
          </div>
        )}

        {/* Top fade — protects navbar / logo */}
        <div className="absolute top-0 left-0 right-0 h-1/5 bg-gradient-to-b from-background/80 to-transparent" />
      </div>

      {/* Title section — centered below banner, matching Club Services layout */}
      <div className="max-w-3xl mx-auto text-center mb-16 pt-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-bold mb-4 md:mb-6 text-white"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            {description}
          </motion.p>
        )}
      </div>
    </>
  );
}
