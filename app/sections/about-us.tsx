// "use client";

// import {
//   motion,
//   useInView,
//   useMotionTemplate,
//   useMotionValue,
// } from "framer-motion";
// import {
//   ArrowLeft2,
//   ArrowRight,
//   ArrowRight2,
//   DocumentText,
//   ExportSquare,
// } from "iconsax-reactjs";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { TitleSection } from "../components/ui/TitleSection";

// const items = [
//   {
//     id: 1,
//     title: "Long Established",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     created_at: "May 20th 2020",
//     img: "https://picsum.photos/400/300?random=1",
//   },
//   {
//     id: 2,
//     title: "The Joy of Coding",
//     description:
//       "Programming is not just about writing code, it is about solving problems and creating solutions that help people in their daily lives.",
//     created_at: "Jun 15th 2021",
//     img: "https://picsum.photos/400/300?random=2",
//   },
//   {
//     id: 3,
//     title: "Modern Design",
//     description:
//       "Good design is obvious. Great design is transparent. It combines aesthetics with functionality to create seamless user experiences.",
//     created_at: "Sep 10th 2022",
//     img: "https://picsum.photos/400/300?random=3",
//   },
//   {
//     id: 4,
//     title: "Future of AI",
//     description:
//       "Artificial Intelligence is reshaping industries, automating mundane tasks, and opening new doors for creativity and innovation.",
//     created_at: "Jan 05th 2023",
//     img: "https://picsum.photos/400/300?random=4",
//   },
//   {
//     id: 5,
//     title: "Remote Culture",
//     description:
//       "The shift to remote work has changed how teams collaborate, emphasizing communication and trust over physical presence.",
//     created_at: "Mar 22nd 2023",
//     img: "https://picsum.photos/400/300?random=5",
//   },
//   {
//     id: 6,
//     title: "Nature & Peace",
//     description:
//       "Taking time to disconnect from the digital world and reconnect with nature is essential for mental clarity and reducing stress.",
//     created_at: "Aug 14th 2023",
//     img: "https://picsum.photos/400/300?random=6",
//   },
//   {
//     id: 7,
//     title: "Minimalism",
//     description:
//       "Simplicity is the ultimate sophistication. Removing the unnecessary allows the important elements to stand out and shine.",
//     created_at: "Nov 08th 2023",
//     img: "https://picsum.photos/400/300?random=7",
//   },
//   {
//     id: 8,
//     title: "Digital Growth",
//     description:
//       "In the age of information, continuous learning and adapting to new technologies is the key to staying relevant and successful.",
//     created_at: "Dec 19th 2023",
//     img: "https://picsum.photos/400/300?random=8",
//   },
// ];

// // این کامپوننت حالا فقط افکت نور دنبال‌کننده موس را دارد و چرخش سه بعدی حذف شده است
// const CardSpotlight = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   function handleMouseMove({
//     currentTarget,
//     clientX,
//     clientY,
//   }: React.MouseEvent<HTMLDivElement>) {
//     const { left, top } = currentTarget.getBoundingClientRect();

//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }

//   return (
//     <div
//       onMouseMove={handleMouseMove}
//       className={`relative group/card border border-border bg-card rounded-2xl overflow-hidden ${className}`}
//     >
//       <motion.div
//         className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/card:opacity-100"
//         style={{
//           background: useMotionTemplate`
//             radial-gradient(
//               500px circle at ${mouseX}px ${mouseY}px,
//               rgba(255, 255, 255, 0.1),
//               transparent 80%
//             )
//           `,
//         }}
//       />
//       <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-between">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default function AboutUs() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const slideDuration = 10000;

//   const sliderRef = useRef(null);
//   const isInView = useInView(sliderRef, { amount: 0.5 });

//   useEffect(() => {
//     if (!isInView) return;

//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % items.length);
//     }, slideDuration);
//     return () => clearInterval(timer);
//   }, [isInView, slideDuration]);

//   const handleClick = (index: number) => setActiveIndex(index);

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev + 1) % items.length);
//   };

//   const getItmStyle = (index: number) => {
//     const length = items.length;
//     let distance = index - activeIndex;
//     if (distance > length / 2) distance -= length;
//     if (distance < -length / 2) distance += length;

//     const isActive = distance === 0;
//     const xTranslate = distance * 105;

//     return {
//       display: Math.abs(distance) > 1 ? "none" : "flex",
//       transform: `translateX(calc(-50% + ${xTranslate}%)) scale(${
//         isActive ? 1 : 0.85
//       })`,
//       opacity: isActive ? 1 : 0.3,
//       zIndex: isActive ? 20 : 10,
//       filter: "blur(0px)",
//       position: "absolute" as const,
//       left: "50%",
//     };
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="flex flex-col items-center w-full min-h-screen mt-20 md:mt-40 pb-20 px-4"
//     >
//       <motion.div
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <TitleSection
//           title1="Turn your social archives into"
//           title2="valuable insights"
//           subtitle="Smart analytics from your archived social data"
//           icon={
//             <DocumentText size="25" className="text-primary" variant="Bulk" />
//           }
//         />
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 w-full max-w-4xl mb-10 md:mb-20">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="h-full"
//         >
//           <CardSpotlight className="h-full">
//             <div className="flex justify-between mb-2">
//               <div className="flex justify-center items-center gap-3">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
//                   alt="Instagram Logo"
//                   width={36}
//                   height={36}
//                 />

//                 <h1 className="text-lg md:text-xl font-bold">Instagram</h1>
//               </div>
//               <div className="text-text-secondary text-sm px-3 py-1 ">
//                 19k Followers
//               </div>
//             </div>
//             <p className="text-text-secondary mb-6 leading-relaxed text-sm md:text-base mt-4">
//               Get the inside track on new features and learn how other people
//               use Raycast.
//             </p>
//             <button className="flex gap-2 items-center text-text-primary hover:text-primary transition-colors text-sm md:text-base font-medium group">
//               Follow us
//               <ArrowRight
//                 size={18}
//                 className="group-hover:translate-x-1 transition-transform"
//               />
//             </button>
//           </CardSpotlight>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="h-full"
//         >
//           <CardSpotlight className="h-full">
//             <div className="flex justify-between mb-2">
//               <div className="flex justify-center items-center gap-3">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
//                   alt="YouTube Icon"
//                   width={36}
//                   height={36}
//                 />

//                 <h1 className="text-lg md:text-xl font-bold">Youtube</h1>
//               </div>
//               <div className="text-text-secondary text-sm px-3 py-1">
//                 50k Subscribe
//               </div>
//             </div>
//             <p className="text-text-secondary mb-6 leading-relaxed text-sm md:text-base mt-4">
//               Keep up to date with the latest releases, features and
//               improvements.
//             </p>
//             <button className="flex gap-2 items-center text-text-primary hover:text-primary transition-colors text-sm md:text-base font-medium group">
//               Subscribe
//               <ArrowRight
//                 size={18}
//                 className="group-hover:translate-x-1 transition-transform"
//               />
//             </button>
//           </CardSpotlight>
//         </motion.div>
//       </div>

//       <motion.div
//         ref={sliderRef}
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.8 }}
//         className="w-full flex flex-col items-center relative mt-10"
//       >
//         <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 md:w-48 md:h-48 bg-primary/20 rounded-full blur-[90px] pointer-events-none z-0" />

//         <div
//           className="
//             relative w-full max-w-6xl h-[200px] md:h-[280px] flex justify-center items-center
//             overflow-visible py-4
//             [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]
//             md:[mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]
//             z-10
//           "
//         >
//           {items.map((item, index) => {
//             const style = getItmStyle(index);
//             const isCenter = style.zIndex === 20;

//             return (
//               <motion.div
//                 key={item.id}
//                 onClick={() => handleClick(index)}
//                 animate={style}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="
//                   cursor-pointer top-1/2 -translate-y-1/2
//                   w-[300px] md:w-[500px] h-[140px] md:h-[180px]
//                   flex items-center justify-center
//                   overflow-visible
//                   absolute
//                 "
//               >
//                 <div
//                   className={`
//                     w-full h-full rounded-2xl md:rounded-3xl p-3 md:p-4 gap-3 md:gap-5 flex flex-row items-start relative overflow-hidden
//                     bg-card transition-all duration-500
//                     ${
//                       isCenter
//                         ? "border border-border/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
//                         : "border border-transparent bg-card/40"
//                     }
//                   `}
//                 >
//                   {isCenter && (
//                     <>
//                       <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-100" />
//                       <motion.div
//                         initial={{ left: "-100%" }}
//                         animate={{ left: "200%" }}
//                         transition={{
//                           duration: 1.5,
//                           ease: "linear",
//                         }}
//                         className="absolute top-0 w-1/2 h-full z-10 pointer-events-none"
//                         style={{
//                           background:
//                             "linear-gradient(90deg, transparent, rgba(255,255,255,0.3) 50%, transparent)",
//                           transform: "skewX(-20deg)",
//                         }}
//                       />
//                     </>
//                   )}

//                   <div className="relative w-24 md:w-32 h-full shrink-0 z-20">
//                     <Image
//                       src={item.img}
//                       alt={item.title}
//                       fill
//                       className="rounded-xl md:rounded-2xl object-cover"
//                     />
//                   </div>

//                   <div className="flex flex-col justify-between h-full flex-1 py-1 z-20">
//                     <div className="flex flex-col gap-1 md:gap-2">
//                       <h3
//                         className={`text-sm md:text-lg font-bold truncate ${
//                           isCenter ? "text-white" : "text-text-secondary"
//                         }`}
//                       >
//                         {item.title}
//                       </h3>
//                       <p className="text-text-secondary text-xs md:text-sm line-clamp-2 leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>

//                     <div className="flex justify-between items-center mt-1 md:mt-2">
//                       <span className="text-text-secondary text-[10px] md:text-xs opacity-60">
//                         {item.created_at}
//                       </span>

//                       <div className="flex items-center gap-1 text-primary cursor-pointer hover:text-primary/80 transition-colors group">
//                         <ExportSquare
//                           size={14}
//                           className="group-hover:translate-x-0.5 transition-transform md:w-4 md:h-4"
//                         />
//                         <span className="text-xs md:text-sm font-medium">
//                           Read more
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>

//       <div className="flex md:hidden flex-row gap-6 mt-4 z-30">
//         <button
//           onClick={handlePrev}
//           className="p-3 rounded-full bg-card border border-border text-text-primary hover:bg-primary/20 active:scale-95 transition-all"
//         >
//           <ArrowLeft2 size="24" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="p-3 rounded-full bg-card border border-border text-text-primary hover:bg-primary/20 active:scale-95 transition-all"
//         >
//           <ArrowRight2 size="24" />
//         </button>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="flex flex-col justify-center items-center gap-2 mt-8 md:mt-5"
//       >
//         <p className="text-text-secondary text-center align-items-center w-[90%] md:w-[80%] text-sm md:text-base">
//           The Hidden Strategy Behind Truly Successful Habit Growth
//         </p>

//         <a
//           href="https://blog.xplorta.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="group flex gap-2 justify-center items-center cursor-pointer"
//         >
//           <Image
//             src="/logo3.png"
//             alt="logo"
//             width={40}
//             height={40}
//             className="md:w-[50px] md:h-[50px]"
//           />

//           <h2
//             className="text-lg md:text-xl font-bold bg-clip-text text-transparent
//     bg-gradient-to-r from-primary via-primary to-text-primary
//     bg-[length:200%_100%] bg-[position:100%_0]
//     group-hover:bg-[position:0%_0]
//     transition-[background-position] duration-500 ease-in-out"
//           >
//             XPLORTA Blogs
//           </h2>

//           <div className="relative flex items-center justify-center">
//             <ArrowRight size={25} className="text-text-primary" />

//             <div className="absolute top-0 left-0 h-full overflow-hidden w-0 group-hover:w-full transition-[width] duration-500 ease-in-out">
//               <ArrowRight size={25} className="text-primary" />
//             </div>
//           </div>
//         </a>
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";

import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  ArrowLeft2,
  ArrowRight,
  ArrowRight2,
  DocumentText,
  ExportSquare,
} from "iconsax-reactjs";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TitleSection } from "../components/ui/TitleSection";

interface WpPost {
  id: number;
  date: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

interface SliderItem {
  id: number;
  title: string;
  description: string;
  created_at: string;
  img: string;
  link: string;
}

const truncateText = (text: string, limit: number) => {
  if (!text) return "";
  if (text.length <= limit) return text;
  return text.slice(0, limit) + "...";
};

const CardSpotlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative group/card border border-border bg-card rounded-2xl overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/card:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

export default function AboutUs() {
  const [items, setItems] = useState<SliderItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideDuration = 5000;

  const sliderRef = useRef(null);
  const isInView = useInView(sliderRef, { amount: 0.5 });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://blog.xplorta.com/wp-json/wp/v2/posts?per_page=10&_embed"
        );
        const data: WpPost[] = await response.json();

        const formattedItems: SliderItem[] = data.map((post) => {
          const cleanExcerpt = post.excerpt.rendered
            .replace(/<[^>]+>/g, "")
            .replace(/\[&hellip;\]/g, "")
            .replace(/\n/g, " ");

          const cleanTitle = post.title.rendered
            .replace(/&#8217;/g, "'")
            .replace(/&amp;/g, "&");

          const date = new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });

          const imageUrl =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://picsum.photos/400/300?grayscale";

          return {
            id: post.id,
            title: cleanTitle,
            description: cleanExcerpt,
            created_at: date,
            img: imageUrl,
            link: post.link,
          };
        });

        setItems(formattedItems);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (!isInView || items.length === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, slideDuration);
    return () => clearInterval(timer);
  }, [isInView, slideDuration, items.length]);

  const handleClick = (index: number) => setActiveIndex(index);

  const handlePrev = () => {
    if (items.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    if (items.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const getItmStyle = (index: number) => {
    const length = items.length;
    if (length === 0) return {};

    let distance = index - activeIndex;
    if (distance > length / 2) distance -= length;
    if (distance < -length / 2) distance += length;

    const isActive = distance === 0;
    const xTranslate = distance * 105;

    return {
      display: Math.abs(distance) > 1 ? "none" : "flex",
      transform: `translateX(calc(-50% + ${xTranslate}%)) scale(${
        isActive ? 1 : 0.85
      })`,
      opacity: isActive ? 1 : 0.3,
      zIndex: isActive ? 20 : 10,
      filter: "blur(0px)",
      position: "absolute" as const,
      left: "50%",
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center w-full min-h-screen mt-20 md:mt-40 pb-20 px-4"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <TitleSection
          title1="Turn your social archives"
          title2="into valuable intelligence"
          subtitle="Smart analytics from your archived social data"
          icon={
            <DocumentText size="25" className="text-primary" variant="Bulk" />
          }
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 w-full max-w-4xl mb-10 md:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-full"
        >
          <CardSpotlight className="h-full">
            <div className="flex justify-between mb-2">
              <div className="flex justify-center items-center gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram Logo"
                  width={36}
                  height={36}
                />
                <h1 className="text-lg md:text-xl font-bold">Instagram</h1>
              </div>
              <div className="text-text-secondary text-sm px-3 py-1 ">
                19k Followers
              </div>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed text-sm md:text-base mt-4">
              Get the inside track on new features and learn how other people
              use Raycast.
            </p>
            <button className="flex gap-2 items-center text-text-primary hover:text-primary transition-colors text-sm md:text-base font-medium group">
              Follow us
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </CardSpotlight>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-full"
        >
          <CardSpotlight className="h-full">
            <div className="flex justify-between mb-2">
              <div className="flex justify-center items-center gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                  alt="YouTube Icon"
                  width={36}
                  height={36}
                />
                <h1 className="text-lg md:text-xl font-bold">Youtube</h1>
              </div>
              <div className="text-text-secondary text-sm px-3 py-1">
                50k Subscribe
              </div>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed text-sm md:text-base mt-4">
              Keep up to date with the latest releases, features and
              improvements.
            </p>
            <button className="flex gap-2 items-center text-text-primary hover:text-primary transition-colors text-sm md:text-base font-medium group">
              Subscribe
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </CardSpotlight>
        </motion.div>
      </div>

      <motion.div
        ref={sliderRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center relative mt-10 min-h-[200px]"
      >
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 md:w-48 md:h-48 bg-primary/20 rounded-full blur-[90px] pointer-events-none z-0" />

        {isLoading ? (
          <div className="flex items-center justify-center h-[200px] text-text-secondary">
            Loading Posts...
          </div>
        ) : (
          <div
            className="
                relative w-full max-w-6xl h-[200px] md:h-[280px] flex justify-center items-center 
                overflow-visible py-4
                [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]
                md:[mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]
                z-10
            "
          >
            {items.map((item, index) => {
              const style = getItmStyle(index);
              const isCenter = style.zIndex === 20;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => handleClick(index)}
                  animate={style}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="
                    cursor-pointer top-1/2 -translate-y-1/2
                    w-[300px] md:w-[500px] h-[140px] md:h-[180px] 
                    flex items-center justify-center
                    overflow-visible
                    absolute
                    "
                >
                  <div
                    className={`
                        w-full h-full rounded-2xl md:rounded-3xl p-3 md:p-4 gap-3 md:gap-5 flex flex-row items-start relative overflow-hidden
                        bg-card transition-all duration-500
                        ${
                          isCenter
                            ? "border border-border/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                            : "border border-transparent bg-card/40"
                        }
                    `}
                  >
                    {isCenter && (
                      <>
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-100" />
                        <motion.div
                          initial={{ left: "-100%" }}
                          animate={{ left: "200%" }}
                          transition={{
                            duration: 1.5,
                            ease: "linear",
                          }}
                          className="absolute top-0 w-1/2 h-full z-10 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, rgba(255,255,255,0.3) 50%, transparent)",
                            transform: "skewX(-20deg)",
                          }}
                        />
                      </>
                    )}

                    <div className="relative w-24 md:w-32 h-full shrink-0 z-20">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        unoptimized
                        className="rounded-xl md:rounded-2xl object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-between h-full flex-1 py-1 z-20">
                      <div className="flex flex-col gap-1 md:gap-2">
                        <h3
                          className={`text-sm md:text-lg font-bold ${
                            isCenter ? "text-white" : "text-text-secondary"
                          }`}
                        >
                          {truncateText(item.title, 30)}
                        </h3>
                        <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                          {truncateText(item.description, 90)}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-1 md:mt-2">
                        <span className="text-text-secondary text-[10px] md:text-xs opacity-60">
                          {item.created_at}
                        </span>

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary cursor-pointer hover:text-primary/80 transition-colors group"
                        >
                          <ExportSquare
                            size={14}
                            className="group-hover:translate-x-0.5 transition-transform md:w-4 md:h-4"
                          />
                          <span className="text-xs md:text-sm font-medium">
                            Read more
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.div>

      {!isLoading && items.length > 0 && (
        <div className="flex md:hidden flex-row gap-6 mt-4 z-30">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-card border border-border text-text-primary hover:bg-primary/20 active:scale-95 transition-all"
          >
            <ArrowLeft2 size="24" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-card border border-border text-text-primary hover:bg-primary/20 active:scale-95 transition-all"
          >
            <ArrowRight2 size="24" />
          </button>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col justify-center items-center gap-2 mt-8 md:mt-5"
      >
        <p className="text-text-secondary text-center align-items-center w-[90%] md:w-[80%] text-sm md:text-base">
          The Hidden Strategy Behind Truly Successful Habit Growth
        </p>

        <a
          href="https://blog.xplorta.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex gap-2 justify-center items-center cursor-pointer"
        >
          <Image
            src="/logo3.png"
            alt="logo"
            width={40}
            height={40}
            className="md:w-[50px] md:h-[50px]"
          />

          <h2
            className="text-lg md:text-xl font-bold bg-clip-text text-transparent 
            bg-gradient-to-r from-primary via-primary to-text-primary 
            bg-[length:200%_100%] bg-[position:100%_0] 
            group-hover:bg-[position:0%_0] 
            transition-[background-position] duration-500 ease-in-out"
          >
            XPLORTA Blogs
          </h2>

          <div className="relative flex items-center justify-center">
            <ArrowRight size={25} className="text-text-primary" />

            <div className="absolute top-0 left-0 h-full overflow-hidden w-0 group-hover:w-full transition-[width] duration-500 ease-in-out">
              <ArrowRight size={25} className="text-primary" />
            </div>
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
}
