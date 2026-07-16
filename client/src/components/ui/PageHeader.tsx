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
      {/* Warm dark grid — base layer, visible only where photo doesn't cover */}
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
          {/* Blurred full-bleed background — fills letterbox bars seamlessly */}
          <div className="absolute inset-0">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover blur-xl opacity-60"
              aria-hidden="true"
            />
          </div>

          {/* Sharp contained photo — full image, never cropped */}
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

      {/* Very light uniform scrim so text stays legible without killing the photo */}
      {image && <div className="absolute inset-0 bg-black/20" />}

      {/* Fade top */}
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-background/80 to-transparent" />

      {/* Deep bottom fade — creates a solid dark shelf for the text */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/90 to-transparent" />

      {/* Text content — pushed to the very bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10 container px-4 text-center pb-3 sm:pb-4 md:pb-6">
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
