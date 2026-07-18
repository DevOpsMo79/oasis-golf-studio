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
      style={{ aspectRatio: "16/9", maxHeight: "520px", minHeight: "340px" }}
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

      {/* Gradient — bottom ~25% solid dark, fade 25–40%, transparent 40–100% */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--background) / 1) 0%, hsl(var(--background) / 1) 25%, hsl(var(--background) / 0.6) 40%, hsl(var(--background) / 0) 100%)",
        }}
      />

      {/* Text content — sits in the solid-dark zone, well above the bottom edge */}
      <div className="absolute top-[68%] left-0 right-0 z-10 container px-4 text-center">
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
