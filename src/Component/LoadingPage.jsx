import { motion } from "motion/react";

export function LoadingPage({ message = "Memuat data...", section = false }) {
  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 1,
  };

  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col items-center gap-5"
    >
      <motion.i
        className="ri-loader-2-line text-[#b00000]"
        style={{ fontSize: section ? "40px" : "52px" }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
      <p
        className="text-gray-500 font-medium"
        style={{ fontSize: section ? "16px" : "18px" }}
      >
        {message}
      </p>
    </motion.div>
  );

  if (section) {
    return (
      <div className="w-full flex items-center justify-center py-20">
        {content}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {content}
    </div>
  );
}
