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

      {image && (
        <>
          {/* Mobile: cover fills banner, focus on top so subjects sit above text zone */}
          <div className="absolute inset-0 md:hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-top"
              style={{ imageRendering: "auto" }}
            />
          </div>

          {/* Desktop: full photo visible, anchored to bottom */}
          <div className="absolute inset-0 hidden md:flex items-end justify-center">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain object-bottom"
              style={{ imageRendering: "auto" }}
            />
          </div>
        </>
      )}

      {/* Light scrim for extra text safety */}
      {image && <div className="absolute inset-0 bg-black/20" />}

      {/* Fade top */}
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-background/80 to-transparent" />

      {/* Deep bottom fade — 75% of banner fades to solid dark */}
      <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-background via-background/95 to-transparent" />

      {/* Text content — pinned to bottom quarter */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-0 right-0 z-10 container px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-1 md:mb-2 text-white drop-shadow-lg"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto drop-shadow"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
