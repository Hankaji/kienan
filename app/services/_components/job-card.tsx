'use client'
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface JobCardProps {
  title: string;
  description: string[]; // Updated to accept a list of strings
  iconSrc: string;
  onHoverIconSrc: string;
  className?: string;
}

export default function JobCard({
  title,
  description,
  iconSrc,
  onHoverIconSrc,
  className
}: JobCardProps) {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If the card exists AND the clicked element is NOT inside this card
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Card
      // 3. Attach the Ref here
      ref={cardRef}
      onClick={() => setIsActive(true)}

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

      className={cn(
        "group relative h-[330px] w-full overflow-hidden border-none shadow-none cursor-pointer rounded-none bg-white",
        isActive && "is-active",
        className
      )}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-10 h-full w-full bg-[#252839] -translate-y-[99%] transition-transform duration-500 ease-out 
        group-hover:translate-y-0 group-[.is-active]:translate-y-0"
      />

      <CardContent className="relative z-20 h-full w-full p-0">

        {/* Decorative Line */}
        {/* <div */}
        {/*   className="absolute left-[48%] top-[20%] h-[3px] w-[250px] -translate-y-1/2 bg-[#252839] transition-colors duration-500  */}
        {/*   group-hover:bg-yellow-400 group-[.is-active]:bg-yellow-400" */}
        {/* /> */}
        {/**/}
        {/* Icon Container */}
        {/* <div */}
        {/*   className="absolute left-1/2 top-[56%] h-[100px] w-[100px] -translate-x-[120%] -translate-y-[160%] transition-all duration-500  */}
        {/*   group-hover:scale-80 group-[.is-active]:scale-80" */}
        {/* > */}
        {/*   <Image */}
        {/*     width={64} */}
        {/*     height={64} */}
        {/*     src={isActive || isHovered ? onHoverIconSrc : iconSrc} */}
        {/*     alt={title} */}
        {/*     className="h-full w-full object-cover" */}
        {/*     loading="lazy" */}
        {/*   /> */}
        {/* </div> */}

        <div className="w-[150%] h-24 flex gap-2 items-center transition-all duration-500 group-hover:scale-95 group-hover:-translate-y-2 group-hover:-translate-x-3
           group-[.is-active]:scale-95 group-[.is-active]:-translate-y-2 group-[.is-active]:-translate-x-3">
          {/* Icon Container */}
          <div
            className="p-2 h-full w-fit transition-all duration-500 group-hover:scale-95 group-[.is-active]:scale-95"
          >
            <Image
              width={128}
              height={128}
              src={isActive || isHovered ? onHoverIconSrc : iconSrc}
              alt={title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Decorative Line */}
          <div
            className="h-[3px] flex-1 bg-[#252839] transition-colors duration-500 
          group-hover:bg-yellow-400 group-[.is-active]:bg-yellow-400"
          />
        </div>

        {/* Title */}
        <h3
          className="absolute left-[40.5%] top-[58%] flex h-[65px] w-[85%] -translate-x-[40%] items-start text-[20px] font-bold leading-tight text-[#252839] 
          transition-all duration-500 ease-out 
          -translate-y-[80%] 
          group-hover:-translate-y-[120%] group-hover:text-yellow-400
          group-[.is-active]:-translate-y-[120%] group-[.is-active]:text-yellow-400"
        >
          {title.toUpperCase()}
        </h3>

        {/* Description List */}
        <div
          className="absolute left-1/2 top-[60%] w-full -translate-x-1/2 translate-y-8 px-8 opacity-0 transition-all duration-500 ease-out 
          group-hover:translate-y-0 group-hover:opacity-100
          group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100"
        >
          <ul className="list-disc space-y-1 pl-5 text-white">
            {description.map((item, index) => (
              <li key={index} className="text-sm leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

      </CardContent>
    </Card>
  );
};
