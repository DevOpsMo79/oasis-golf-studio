import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
  placeholderId?: number;
}

export function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
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

      {/* Full-bleed photo with upward focal point — subjects sit high, lower area is background */}
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 15%", imageRendering: "auto" }}
          />
        </div>
      )}

      {/* Light uniform scrim */}
      {image && <div className="absolute inset-0 bg-black/20" />}

      {/* Top fade — protects navbar */}
      <div className="absolute top-0 left-0 right-0 h-1/5 bg-gradient-to-b from-background/80 to-transparent" />

      {/* Full-height gradient — bottom half is dark, top half fades to transparent */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 via-50% to-transparent" />

      {/* Text content — pinned to the very bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 container px-4 text-center pb-0 sm:pb-1 md:pb-5">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-6xl font-display font-bold mb-0.5 md:mb-2 text-white drop-shadow-lg"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto drop-shadow"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
