import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function PageHero({ title, subtitle }) {
  return (
    <div className="relative min-h-[400px] md:min-h-[600px] flex items-center bg-[#4A0000] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4A0000] via-[#b00000] to-[#4A0000] opacity-80" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-[70px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h1 className="text-white text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/80 text-base md:text-lg lg:text-[20px] mt-2 max-w-[600px]">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export function PageHeroDetailBlog({ img }) {
  return (
    // 1. Tambahkan h-[400px] (bukan cuma max-h) agar parent punya tinggi tetap saat gambar dimuat
    <div className="relative h-[350px] md:h-[400px] w-full flex items-center justify-center bg-[#4A0000] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        // 2. Tambahkan w-full dan h-full di motion.div agar membentang seukuran parent-nya
        className="w-full h-full" 
      >
        <img 
          src={img} 
          // 3. w-full h-full dipadu dengan object-cover dan object-center akan membuat gambar pas di tengah
          className="w-full h-full object-cover object-center" 
          alt="Hero Detail Blog" 
        />
      </motion.div>
    </div>
  );
}

export function ContentSection({ children, className = "" }) {
  return (
    <div
      className={`px-4 sm:px-6 lg:px-[70px] py-8 md:py-12 lg:py-[64px] ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`font-semibold text-2xl md:text-3xl lg:text-[32px] text-black ${className}`}
    >
      {children}
    </h2>
  );
}

export function BackLink({ to = "/" }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-[#b00000] hover:underline mb-6 text-sm"
    >
      <i className="ri-arrow-left-line"></i>
      Kembali
    </Link>
  );
}

export function CardLink({ to, title, description, icon }) {
  return (
    <Link
      to={to}
      className="col-span-1 w-full min-h-[160px] bg-white rounded-[20px] p-4 lg:p-[24px] flex items-start flex-col gap-2 lg:gap-[8px] shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
    >
      {icon && (
        <i className={`${icon} text-3xl lg:text-[40px] text-[#b00000]`}></i>
      )}
      <h3 className="font-semibold text-base lg:text-[20px] text-black group-hover:text-[#b00000] transition-colors">
        {title}
      </h3>
      {description && (
        <p className="text-sm lg:text-[16px] text-gray-600 line-clamp-3">
          {description}
        </p>
      )}
    </Link>
  );
}

export function CardGrid({ children, cols = "md:grid-cols-2 lg:grid-cols-3" }) {
  return (
    <div
      className={`grid grid-cols-1 ${cols} gap-4 lg:gap-[20px] 2xl:gap-[40px] mt-6`}
    >
      {children}
    </div>
  );
}

export function CardIMG({ nama, jabatan, img }) {
  return (
    <div className="w-[300px]">
      <div className="bg-red-600 rounded-tl-[12px] rounded-tr-[12px] overflow-hidden flex items-center justify-center">
        <img src={img} className="max-h-[344px] object-center" alt="" />
      </div>
      <div className="bg-white p-4 rounded-bl-[12px] rounded-br-[12px] shadow-sm border border-gray-100">
        <p className="font-semibold">{jabatan}</p>
        <p className="text-gray-600">{nama}</p>
      </div>
    </div>
  );
}
