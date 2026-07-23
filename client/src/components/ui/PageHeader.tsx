import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <>
      {/* Banner */}
      <div
        className="relative w-full overflow-hidden page-header-banner"
        style={{ aspectRatio: "16/9", maxHeight: "520px", minHeight: "220px" }}
      >
        <style>{`
          @media (max-width: 768px) {
            .page-header-banner { aspect-ratio: 4/3 !important; max-height: 400px !important; }
          }
        `}</style>
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ imageRendering: "auto" }}
          />
        ) : (
          <>
            {/* Warm dark grid fallback */}
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
          </>
        )}

        {/* Top fade — protects navbar / logo */}
        <div className="absolute top-0 left-0 right-0 h-1/5 bg-gradient-to-b from-background/80 to-transparent" />
      </div>

      {/* Title section — centered below banner */}
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
