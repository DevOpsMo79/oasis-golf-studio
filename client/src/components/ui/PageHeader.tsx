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
      {/* ——— Banner ——— photo only, no text overlay */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "16/9", maxHeight: "520px", minHeight: "220px" }}
      >
        {/* Warm dark grid — fills the entire area seamlessly */}
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
            {/* Sharp full-image, never cropped — centered naturally */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain"
                style={{ imageRendering: "auto" }}
              />
            </div>
          </>
        )}

        {/* Very light uniform scrim so photo has depth */}
        {image && <div className="absolute inset-0 bg-black/10" />}

        {/* Top fade for navbar */}
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-background/80 to-transparent" />

        {/* Left-side dark zone — keeps the OGS logo legible over any photo */}
        {image && (
          <div className="absolute top-0 left-0 w-[45%] h-full bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        )}

        {/* Bottom-left solid zone — aggressively covers baked-in text (e.g. Events photo) */}
        {image && (
          <div className="absolute bottom-0 left-0 w-[65%] h-[60%] bg-gradient-to-tr from-black via-black/70 to-transparent" />
        )}

        {/* Hard blackout patch for the Events photo bottom-left text */}
        {image && (
          <div className="absolute bottom-[5%] left-[2%] w-[28%] h-[18%] bg-black/95 rounded-sm" />
        )}

        {/* Soft bottom fade into the title band */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ——— Title band ——— sits below the banner in solid dark space */}
      <div className="relative bg-background pt-6 sm:pt-8 pb-10 sm:pb-14 md:pb-16">
        {/* Subtle grid texture for continuity */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #c8a96e 0px, transparent 1px, transparent 80px, #c8a96e 81px), repeating-linear-gradient(0deg, #c8a96e 0px, transparent 1px, transparent 80px, #c8a96e 81px)",
          }}
        />
        <div className="container px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2 md:mb-3 text-white"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </>
  );
}
