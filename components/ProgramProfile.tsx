"use client";
import React from "react";
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { IoLogoLinkedin } from "react-icons/io5";
import  LeetCodeIcon  from './icons/leetcode'
import GFG from "./icons/gfg";

const ProgramProfile = () =>{
  return (

    <section className="w-full mt-14  py-20" id='profile'>
        <h1 className="heading">
        My <span className="text-purple">Profiles </span>

        </h1>
      <div className=" my-20 flex flex-col lg:flex-row items-center justify-center   gap-7  ">
        <Card title="GeeksForGeeks" icon={<GFG size={70} />} 
        description="Tap here to visit my GeeksForGeeks Profile"
        href="https://www.geeksforgeeks.org/user/yashsin208/" >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            
          />
        </Card>
        <Card title="Leetcode" icon={<LeetCodeIcon size={50}/>}
        description="Tap here to visit my Leetcode Profile"
         href="https://leetcode.com/u/yashsin208/" >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-black text-[#F89F1B]" 
            colors={[
                [248, 159, 27],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="LinkdeIn" icon={<IoLogoLinkedin size={48} className="text-blue-500"/>}
        description="Tap here to visit my LinkedIn Profile"
         href="https://www.linkedin.com/in/yash-singhal223/">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
            
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  href,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  description?:string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] cursor-pointer"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col items-center justify-center">
        <h2 className="dark:text-white text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className=" text-sm dark:text-white  opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 " style={{color:'#e4ecff'}}>
          {description}
        </h2>
        </div>
      </div>
    </a>
  );
};

// const AceternityIcon = () => {
//   return (
//     <svg
//       width="66"
//       height="65"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
//     >
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="15"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round"
//         style={{ mixBlendMode: "darken" }}
//       />
//     </svg>
//   );
// };

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default ProgramProfile
