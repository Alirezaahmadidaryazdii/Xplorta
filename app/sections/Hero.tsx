// "use client";
// import { ButtonGetStarted } from "../components/ui/Button-getStarted";
// import { Driver, Home2, ProfileCircle, Send2 } from "iconsax-reactjs";
// import { useState, useEffect } from "react";
// import { TitleSection } from "../components/ui/TitleSection";
// import { motion } from "framer-motion";

// const ParticleSide = ({ className }: { className?: string }) => {
//   const [particles, setParticles] = useState<any[]>([]);

//   useEffect(() => {
//     const newParticles = Array.from({ length: 100 }).map((_, i) => ({
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
//     <div
//       className={`absolute top-0 h-full w-[150px] md:w-[300px] pointer-events-none overflow-hidden ${className}`}
//       style={{
//         maskImage:
//           "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
//         WebkitMaskImage:
//           "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
//       }}
//     >
//       {particles.map((p) => (
//         <span
//           key={p.id}
//           className="absolute bg-white rounded-full animate-float"
//           style={{
//             top: p.top,
//             left: p.left,
//             width: p.size,
//             height: p.size,
//             opacity: p.opacity,
//             animation: `float ${p.duration} linear infinite`,
//             animationDelay: `-${p.delay}`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// const style = `
//   @keyframes float {
//     0% { transform: translateY(0px); opacity: 0; }
//     20% { opacity: var(--target-opacity, 1); }
//     80% { opacity: var(--target-opacity, 1); }
//     100% { transform: translateY(-100px); opacity: 0; }
//   }
//   .animate-float {
//     animation-name: float;
//   }
// `;

// interface SocialIconProps {
//   socialName: string;
//   className?: string;
// }

// const SocialIcon: React.FC<SocialIconProps> = ({ socialName, className }) => {
//   let iconUrl = "";
//   let needsInvert = false;

//   switch (socialName.toLowerCase()) {
//     case "whatsapp":
//       iconUrl = "https://cdn.jsdelivr.net/npm/simple-icons/icons/whatsapp.svg";
//       needsInvert = true;
//       break;
//     case "instagram":
//       iconUrl = "https://cdn.jsdelivr.net/npm/simple-icons/icons/instagram.svg";
//       needsInvert = true;
//       break;
//     case "teams":
//     case "microsoft":
//       iconUrl =
//         "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftteams.svg";
//       needsInvert = true;
//       break;
//   }

//   const style = needsInvert ? { filter: "invert(1) brightness(2)" } : {};

//   return (
//     <img
//       src={iconUrl}
//       alt={socialName}
//       className={className || "w-6 h-6"}
//       style={style}
//     />
//   );
// };

// export default function Hero() {
//   const [selectedId, setSelectedId] = useState<number | null>(1);
//   const items = [
//     {
//       id: 1,
//       label: "Home",
//       icon: <Home2 className="w-5 h-5 md:w-6 md:h-6" color="white" />,
//       src: "/video/dashboard.mp4",
//     },
//     {
//       id: 2,
//       label: "Backups",
//       icon: <Driver className="w-5 h-5 md:w-6 md:h-6" color="white" />,
//       src: "/video/backups.mp4",
//     },
//     {
//       id: 3,
//       label: "Profile",
//       icon: <ProfileCircle className="w-5 h-5 md:w-6 md:h-6" color="white" />,
//       src: "/video/profiles.mp4",
//     },
//     {
//       id: 4,
//       label: "Instagram",
//       icon: (
//         <SocialIcon socialName="instagram" className="w-5 h-5 md:w-6 md:h-6" />
//       ),
//       src: "/video/instagram.mp4",
//     },
//   ];

//   const activeItem = items.find((item) => item.id === selectedId);

//   const handleVideoEnded = () => {
//     if (selectedId === null) return;
//     const currentIndex = items.findIndex((item) => item.id === selectedId);
//     const nextIndex = (currentIndex + 1) % items.length;
//     setSelectedId(items[nextIndex].id);
//   };

//   return (
//     <div className="w-full flex flex-col gap-3 mt-10 md:mt-20 justify-center items-center overflow-hidden px-4">
//       <style>{style}</style>

//       <TitleSection
//         title1="Turn your Social records into"
//         title2="deeper insights"
//         subtitle="Smart analytics from your saved social data"
//         icon={<Send2 variant="Bulk" size="25" className="text-primary" />}
//       />

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="text-text-secondary flex mb-6 justify-center items-center flex-col text-center"
//       >
//         Turn your stored data into
//         <span>partical insights</span>
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.4, delay: 0.5 }}
//       >
//         <ButtonGetStarted isShadow={true} />
//       </motion.div>

//       <div className="relative mt-10 md:mt-20 w-full flex justify-center">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.8 }}
//           className="hidden lg:block"
//         >
//           <ParticleSide className="-left-[200px] top-0 h-full" />
//           <ParticleSide className="-right-[200px] top-0 h-full" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 50, scale: 0.95 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.6,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="relative w-full max-w-[960px] aspect-[960/604] border-2 border-border bg-black rounded-[20px] md:rounded-[40px] overflow-hidden flex flex-col items-center justify-center z-10"
//         >
//           {activeItem && (
//             <video
//               key={activeItem.id}
//               autoPlay
//               muted
//               playsInline
//               onEnded={handleVideoEnded}
//               className="absolute top-0 left-0 w-full h-full object-cover"
//             >
//               <source src={activeItem.src} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           )}

//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-[398px] h-[2px] bg-gradient-to-r from-[#0F717E]/0 via-[#0F717E] to-[#0F717E]/0 z-10"></div>

//           <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 rounded-xl border border-border p-1.5 md:p-2 z-20 bg-black/50 backdrop-blur-md">
//             {items.map((item) => {
//               const isSelected = selectedId === item.id;
//               return (
//                 <div
//                   key={item.id}
//                   onClick={() => setSelectedId(item.id)}
//                   className={`
//                   flex items-center justify-center 
//                   w-10 h-10 md:w-[50px] md:h-[50px] 
//                   rounded-[8px] md:rounded-[12px] border 
//                   ${
//                     isSelected
//                       ? " scale-110 border-border bg-card -translate-y-2 md:-translate-y-4 shadow-[0_-4px_30px_rgba(255,255,255,0.15)]"
//                       : "border-[#2F3031] bg-gradient-radial from-[#787878]/10 to-[#282828]/0 shadow-[0_7px_3px_rgba(0,0,0,0.03)_0_4px_4px_rgba(0,0,0,0.25)]"
//                   }
//                   cursor-pointer
//                   transition-all duration-300
//                 `}
//                 >
//                   {item.icon}
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
import { ButtonGetStarted } from "../components/ui/Button-getStarted";
import { Driver, Home2, ProfileCircle, Send2 } from "iconsax-reactjs";
import { useState, useEffect } from "react";
import { TitleSection } from "../components/ui/TitleSection";
import { motion, AnimatePresence } from "framer-motion";

const ParticleSide = ({ className }: { className?: string }) => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 100 }).map((_, i) => ({
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

const style = `
  @keyframes float {
    0% { transform: translateY(0px); opacity: 0; }
    20% { opacity: var(--target-opacity, 1); }
    80% { opacity: var(--target-opacity, 1); }
    100% { transform: translateY(-100px); opacity: 0; }
  }
  .animate-float {
    animation-name: float;
  }
`;

interface SocialIconProps {
  socialName: string;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ socialName, className }) => {
  let iconUrl = "";
  let needsInvert = false;

  switch (socialName.toLowerCase()) {
    case "whatsapp":
      iconUrl = "https://cdn.jsdelivr.net/npm/simple-icons/icons/whatsapp.svg";
      needsInvert = true;
      break;
    case "instagram":
      iconUrl = "https://cdn.jsdelivr.net/npm/simple-icons/icons/instagram.svg";
      needsInvert = true;
      break;
    case "teams":
    case "microsoft":
      iconUrl =
        "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftteams.svg";
      needsInvert = true;
      break;
  }

  const style = needsInvert ? { filter: "invert(1) brightness(2)" } : {};

  return (
    <img
      src={iconUrl}
      alt={socialName}
      className={className || "w-6 h-6"}
      style={style}
    />
  );
};

export default function Hero() {
  const [selectedId, setSelectedId] = useState<number | null>(1);
  const items = [
    {
      id: 1,
      label: "Home",
      icon: <Home2 className="w-5 h-5 md:w-6 md:h-6" color="white" />,
      src: "/video/dashboard.mp4",
    },
    {
      id: 2,
      label: "Backups",
      icon: <Driver className="w-5 h-5 md:w-6 md:h-6" color="white" />,
      src: "/video/backups.mp4",
    },
    {
      id: 3,
      label: "Profile",
      icon: <ProfileCircle className="w-5 h-5 md:w-6 md:h-6" color="white" />,
      src: "/video/profiles.mp4",
    },
    {
      id: 4,
      label: "Instagram",
      icon: (
        <SocialIcon socialName="instagram" className="w-5 h-5 md:w-6 md:h-6" />
      ),
      src: "/video/instagram.mp4",
    },
  ];

  const activeItem = items.find((item) => item.id === selectedId);

  const handleVideoEnded = () => {
    if (selectedId === null) return;
    const currentIndex = items.findIndex((item) => item.id === selectedId);
    const nextIndex = (currentIndex + 1) % items.length;
    setSelectedId(items[nextIndex].id);
  };

  return (
    <div className="w-full flex flex-col gap-3 mt-10 md:mt-20 justify-center items-center overflow-hidden px-4">
      <style>{style}</style>

      <TitleSection
        title1="Turn your Social records into"
        title2="deeper insights"
        subtitle="Smart analytics from your saved social data"
        icon={<Send2 variant="Bulk" size="25" className="text-primary" />}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-text-secondary flex mb-6 justify-center items-center flex-col text-center"
      >
        Turn your stored data into
        <span>partical insights</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <ButtonGetStarted isShadow={true} />
      </motion.div>

      <div className="relative mt-10 md:mt-20 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:block"
        >
          <ParticleSide className="-left-[200px] top-0 h-full" />
          <ParticleSide className="-right-[200px] top-0 h-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full max-w-[960px] flex flex-col items-center z-10"
        >
          <div className="relative w-full aspect-[960/604] border-2 border-border bg-black rounded-[20px] md:rounded-[40px] overflow-hidden">
            {activeItem && (
              <video
                key={activeItem.id}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnded}
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src={activeItem.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-[398px] h-[2px] bg-gradient-to-r from-[#0F717E]/0 via-[#0F717E] to-[#0F717E]/0 z-10"></div>
          </div>

          <div className="
            flex items-center justify-center gap-1 
            rounded-xl border border-border p-1.5 md:p-2 z-20 bg-black/50 backdrop-blur-md
            mt-5 w-fit mx-auto                                    
            md:mt-0 md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2 
            transition-all
          ">
            {items.map((item) => {
              const isSelected = selectedId === item.id;
              return (
                <div key={item.id} className="relative flex flex-col items-center">
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        className="absolute -top-[50px] md:-top-[60px] bg-card text-white text-[12px] font-bold px-3 py-1.5 rounded-[8px] shadow-lg whitespace-nowrap z-30 border border-border/50"
                      >
                        {item.label}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-card"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    onClick={() => setSelectedId(item.id)}
                    className={`
                      flex items-center justify-center 
                      w-10 h-10 md:w-[50px] md:h-[50px] 
                      rounded-[8px] md:rounded-[12px] border 
                      cursor-pointer
                      transition-all duration-300
                      ${
                        isSelected
                          ? "scale-110 border-border bg-card -translate-y-2 md:-translate-y-4 shadow-[0_-4px_30px_rgba(255,255,255,0.15)]"
                          : "border-[#2F3031] bg-gradient-radial from-[#787878]/10 to-[#282828]/0 shadow-[0_7px_3px_rgba(0,0,0,0.03)_0_4px_4px_rgba(0,0,0,0.25)]"
                      }
                    `}
                  >
                    {item.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}