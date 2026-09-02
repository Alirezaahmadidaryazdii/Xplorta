// "use client";
// import { ButtonGetStarted } from "../components/ui/Button-getStarted";
// import { Driver, Home2, Instagram, ProfileCircle, Send2 } from "iconsax-reactjs";
// import { useState, useEffect } from "react";
// import { TitleSection } from "../components/ui/TitleSection";
// import { motion, AnimatePresence } from "framer-motion";

// const ParticleSide = ({ className }: { className?: string }) => {
//   const [particles, setParticles] = useState<any[]>([]);
//   useEffect(() => {
//     const newParticles = Array.from({ length: 80 }).map((_, i) => ({
//       id: i,
//       top: Math.random() * 100 + "%",
//       left: Math.random() * 100 + "%",
//       size: Math.random() * 2 + 1 + "px",
//       duration: Math.random() * 15 + 5 + "s",
//       delay: Math.random() * 10 + "s",
//       opacity: Math.random() * 0.7 + 0.1,
//     }));
//     setParticles(newParticles);
//   }, []);

//   return (
//     <div className={`absolute top-0 h-full w-[150px] md:w-[300px] pointer-events-none overflow-hidden ${className}`}
//       style={{
//         maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
//         WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
//       }}>
//       {particles.map((p) => (
//         <span key={p.id} className="absolute bg-white rounded-full animate-float"
//           style={{
//             top: p.top, left: p.left, width: p.size, height: p.size, opacity: p.opacity,
//             animation: `float ${p.duration} linear infinite`, animationDelay: `-${p.delay}`,
//           }} />
//       ))}
//     </div>
//   );
// };


// export default function Hero() {
//   const [selectedId, setSelectedId] = useState<number>(1);
//   const [isVideoLoading, setIsVideoLoading] = useState(true);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const items = [
//     { id: 1, label: "Home", icon: <Home2  className="w-5 h-5 md:w-6 md:h-6" />, src: "/video/dashboard.mp4" },
//     { id: 2, label: "Backups", icon: <Driver  className="w-5 h-5 md:w-6 md:h-6" />, src: "/video/backups.mp4" },
//     { id: 3, label: "Profile", icon: <ProfileCircle  className="w-5 h-5 md:w-6 md:h-6" />, src: "/video/profiles.mp4" },
//     { id: 4, label: "Instagram", icon: <Instagram  className="w-5 h-5 md:w-6 md:h-6" />, src: "/video/instagram.mp4" },
//   ];

//   const activeItem = items.find((item) => item.id === selectedId) || items[0];

//   const handleTabChange = (id: number) => {
//     if (id !== selectedId) {
//       setIsVideoLoading(true); 
//       setSelectedId(id);
//     }
//   };

//   const handleVideoEnded = () => {
//     const currentIndex = items.findIndex((item) => item.id === selectedId);
//     const nextIndex = (currentIndex + 1) % items.length;
//     handleTabChange(items[nextIndex].id);
//   };

//   if (!mounted) return null;

//   return (
//     <div className="w-full flex flex-col gap-3 mt-10 md:mt-20 justify-center items-center overflow-hidden px-4">
//       <style>{`
//         @keyframes float { 0% { transform: translateY(0px); opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateY(-100px); opacity: 0; } }
//         .animate-float { animation-name: float; }
//       `}</style>

//       <TitleSection
//         title1="Transform your social records"
//         title2="into meaningful, actionable insights"
//         subtitle="Smart analytics from your saved social data"
//         icon={<Send2 variant="Bulk" size="25" className="text-primary" />}
//       />

//       <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-text-secondary flex mb-6 justify-center items-center flex-col text-center">
//         Turn your stored data into <span>practical insights</span>
//       </motion.p>

//       <div className="cursor-pointer active:scale-95 transition-transform">
//         <ButtonGetStarted isShadow={true} />
//       </div>

//       <div className="relative mt-10 md:mt-20 w-full flex justify-center">
//         <div className="hidden lg:block">
//           <ParticleSide className="-left-[200px] top-0 h-full" />
//           <ParticleSide className="-right-[200px] top-0 h-full" />
//         </div>

//         <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative w-full max-w-[960px] flex flex-col items-center z-10">
          
//           <div className="relative w-full aspect-[960/604] border-2 border-border bg-black rounded-[20px] md:rounded-[40px] overflow-hidden shadow-2xl">
            
//             {/* Ambient Glow */}
//             <video key={`glow-${activeItem.id}`} autoPlay muted playsInline className="absolute inset-0 w-full h-full object-cover scale-150 blur-[80px] opacity-30 pointer-events-none">
//               <source src={activeItem.src} type="video/mp4" />
//             </video>

//             {/* Main Video */}
//             <video
//               key={activeItem.id}
//               autoPlay muted playsInline
//               onEnded={handleVideoEnded}
//               onWaiting={() => setIsVideoLoading(true)}
//               onCanPlay={() => setIsVideoLoading(false)} 
//               className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500 ${isVideoLoading ? 'opacity-0' : 'opacity-100'}`}
//             >
//               <source src={activeItem.src} type="video/mp4" />
//             </video>

//             {/* Loading Spinner */}
//             <AnimatePresence>
//               {isVideoLoading && (
//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-md">
//                   <div className="w-10 h-10 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-[398px] h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 z-30"></div>
//           </div>
//           <div className="
//             flex items-center justify-center gap-1.5 
//             rounded-2xl border border-border p-2 z-20 bg-black/40 backdrop-blur-xl
//             mt-6 w-fit mx-auto                                    
//             md:mt-0 md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 
//             transition-all shadow-xl
//           ">
//             {items.map((item) => {
//               const isSelected = selectedId === item.id;
//               return (
//                 <div key={item.id} className="relative flex flex-col items-center group">
//                   <AnimatePresence>
//                     {isSelected && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 10 }}
//                         className="absolute -top-[55px] bg-white/10 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-30"
//                       >
//                         {item.label}
//                         <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white/10"></div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                   <button
//                     onClick={() => handleTabChange(item.id)} 
//                     className={`
//                       relative flex items-center justify-center 
//                       w-11 h-11 md:w-[54px] md:h-[54px] 
//                       rounded-xl border cursor-pointer
//                       transition-all duration-500 ease-out
//                       ${
//                         isSelected
//                           ? "scale-110 border-white/20 bg-white/10 -translate-y-3 shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
//                           : "border-transparent bg-transparent hover:bg-white/5 opacity-60 hover:opacity-100"
//                       }
//                     `}
//                   >
//                     <div className={`${isSelected ? "scale-110 text-white" : "text-white/70"} transition-all`}>
//                       {item.icon}
//                     </div>
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }




"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  Driver,
  Facebook,
  Home2,
  Instagram,
  People,
  Send2,
  Whatsapp,
} from "iconsax-reactjs";
import { useEffect, useRef, useState } from "react";
import { ButtonDemo } from "../components/ui/Button-demo";
import { ButtonGetStarted } from "../components/ui/Button-getStarted";
import { TitleSection } from "../components/ui/TitleSection";

const ParticleSide = ({ className }: { className?: string }) => {
  const [particles, setParticles] = useState<any[]>([]);
  useEffect(() => {
    const newParticles = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 2 + 1 + "px",
      duration: Math.random() * 15 + 5 + "s",
      delay: Math.random() * 10 + "s",
      opacity: Math.random() * 0.7 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div
      className={`absolute top-0 h-full w-[150px] md:w-[300px] pointer-events-none overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bg-white rounded-full animate-float"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `float ${p.duration} linear infinite`,
            animationDelay: `-${p.delay}`,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // آدرس‌ها با پارامترهای بهینه‌سازی Cloudinary آپدیت شدند
  const items = [
    {
      id: 1,
      label: "Home",
      icon: <Home2 className="w-5 h-5 md:w-6 md:h-6" />,
      src: "https://res.cloudinary.com/dhvah07ca/video/upload/f_auto,q_auto,w_1080/v1778314769/dashboard_pggsfy.mp4",
    },
    {
      id: 2,
      label: "Backups",
      icon: <Driver className="w-5 h-5 md:w-6 md:h-6" />,
      src: "https://res.cloudinary.com/dhvah07ca/video/upload/f_auto,q_auto,w_1080/v1778314783/backups-section_tbbqyc.mp4",
    },
    {
      id: 3,
      label: "Instagram",
      icon: <Instagram className="w-5 h-5 md:w-6 md:h-6" />,
      src: "https://res.cloudinary.com/dhvah07ca/video/upload/f_auto,q_auto,w_1080/v1778314847/instagram_rypbdn.mp4",
    },
    {
      id: 4,
      label: "Facebook",
      icon: <Facebook className="w-5 h-5 md:w-6 md:h-6" />,
      src: "https://res.cloudinary.com/dhvah07ca/video/upload/f_auto,q_auto,w_1080/v1778314837/facebook_h2urhh.mp4",
    },
    {
      id: 5,
      label: "WhatsApp",
      icon: <Whatsapp className="w-5 h-5 md:w-6 md:h-6" />,
      src: "https://res.cloudinary.com/dhvah07ca/video/upload/f_auto,q_auto,w_1080/v1778314896/whatsapp_k80sna.mp4",
    },
    {
      id: 6,
      label: "Teams",
      icon: <People className="w-5 h-5 md:w-6 md:h-6" />,
      src: "https://res.cloudinary.com/dhvah07ca/video/upload/f_auto,q_auto,w_1080/v1778314806/microsoft-teams_axwt5e.mp4",
    },
  ];

  const activeItem = items.find((item) => item.id === selectedId) || items[0];

  const handleTabChange = (id: number) => {
    if (id !== selectedId) {
      setIsVideoLoading(true);
      setSelectedId(id);
    }
  };

  const handleVideoEnded = () => {
    const currentIndex = items.findIndex((item) => item.id === selectedId);
    const nextIndex = (currentIndex + 1) % items.length;
    handleTabChange(items[nextIndex].id);
  };

  if (!mounted) return null;

  return (
    <div className="w-full flex flex-col gap-3 mt-10 md:mt-20 justify-center items-center overflow-hidden px-4">
      <style>{`
        @keyframes float { 0% { transform: translateY(0px); opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateY(-100px); opacity: 0; } }
        .animate-float { animation-name: float; }
      `}</style>

      <TitleSection
        title1="Transform your social records"
        title2="into meaningful, actionable insights"
        subtitle="Smart analytics from your saved social data"
        icon={<Send2 variant="Bulk" size="25" className="text-primary" />}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-text-secondary flex mb-6 justify-center items-center flex-col text-center"
      >
        Turn your stored data into <span>practical insights</span>
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 cursor-pointer active:scale-95 transition-transform">
        <ButtonGetStarted isShadow={true} />
        <ButtonDemo isShadow={true} />
      </div>

      <div className="relative mt-10 md:mt-20 w-full flex justify-center">
        <div className="hidden lg:block">
          <ParticleSide className="-left-[200px] top-0 h-full" />
          <ParticleSide className="-right-[200px] top-0 h-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[960px] flex flex-col items-center z-10"
        >
          <div className="relative w-full aspect-[960/604] border-2 border-border bg-black rounded-[20px] md:rounded-[40px] overflow-hidden shadow-2xl">
            {/* Ambient Glow */}
            <video
              key={`glow-${activeItem.id}`}
              autoPlay
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover scale-150 blur-[80px] opacity-30 pointer-events-none"
            >
              <source src={activeItem.src} type="video/mp4" />
            </video>

            {/* Main Video */}
            <video
              key={activeItem.id}
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnded}
              onWaiting={() => setIsVideoLoading(true)}
              onCanPlay={() => {
                setIsVideoLoading(false);
                if (videoRef.current) {
                  videoRef.current.playbackRate = 1.5;
                }
              }}
              className={`absolute inset-0 w-full h-full object-contain z-10 transition-opacity duration-500 ${isVideoLoading ? "opacity-0" : "opacity-100"}`}
            >
              <source src={activeItem.src} type="video/mp4" />
            </video>

            {/* Loading Spinner */}
            <AnimatePresence>
              {isVideoLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-md"
                >
                  <div className="relative flex flex-col items-center justify-center gap-6">
                    {/* Glowing background */}
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/30 rounded-full blur-[40px] pointer-events-none"
                    />

                    {/* Orbital Rings */}
                    <div className="relative flex items-center justify-center w-28 h-28">
                      {/* Outer Ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 4,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border border-dashed border-primary/40"
                      />
                      {/* Middle Ring */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "linear",
                        }}
                        className="absolute inset-2 rounded-full border-[2px] border-transparent border-t-primary border-l-primary/30 opacity-80"
                      />
                      {/* Inner Ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "linear",
                        }}
                        className="absolute inset-5 rounded-full border border-transparent border-b-primary/80 border-r-primary/50"
                      />

                      {/* Active Icon in the center */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="z-10 text-white relative flex items-center justify-center bg-black/60 backdrop-blur-xl rounded-full w-14 h-14 border border-white/10 shadow-[0_0_20px] shadow-primary/30"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                          }}
                          className="text-primary flex items-center justify-center"
                        >
                          {activeItem.icon}
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-[398px] h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 z-30"></div>
          </div>

          <div
            className="
            flex items-center justify-center gap-1.5 
            rounded-2xl border border-border p-2 z-20 bg-black/40 backdrop-blur-xl
            mt-6 w-fit mx-auto                                    
            md:mt-0 md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 
            transition-all shadow-xl
          "
          >
            {items.map((item) => {
              const isSelected = selectedId === item.id;
              return (
                <div
                  key={item.id}
                  className="relative flex flex-col items-center group"
                >
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-[55px] bg-white/10 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-30"
                      >
                        {item.label}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white/10"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => handleTabChange(item.id)}
                    className={`
                      relative flex items-center justify-center 
                      w-11 h-11 md:w-[54px] md:h-[54px] 
                      rounded-xl border cursor-pointer
                      transition-all duration-500 ease-out
                      ${
                        isSelected
                          ? "scale-110 border-white/20 bg-white/10 -translate-y-3 shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                          : "border-transparent bg-transparent hover:bg-white/5 opacity-60 hover:opacity-100"
                      }
                    `}
                  >
                    <div
                      className={`${isSelected ? "scale-110 text-white" : "text-white/70"} transition-all`}
                    >
                      {item.icon}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
