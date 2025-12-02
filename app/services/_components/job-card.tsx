import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface JobCardProps {
  title: string;
  description: string[]; // Updated to accept a list of strings
  iconSrc: string;
  className?: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  description,
  iconSrc,
  className
}) => {
  return (
    <Card
      className={cn(
        "group relative h-[330px] w-full overflow-hidden border-none shadow-none cursor-pointer rounded-none bg-white",
        className
      )}
    >
      <div
        className="absolute inset-0 z-10 h-full w-full bg-[#252839] -translate-y-[99%] transition-transform duration-500 ease-out group-hover:translate-y-0"
      />

      <CardContent className="relative z-20 h-full w-full p-0">

        <div
          className="absolute left-[44%] top-[22%] h-[3px] w-[170px] -translate-y-1/2 bg-[#252839] transition-colors duration-300 group-hover:bg-white"
        />

        <div
          className="absolute left-1/2 top-[56%] h-[100px] w-[100px] -translate-x-[130%] -translate-y-[160%] transition-all duration-300 group-hover:scale-80"
        >
          <Image
            width={64}
            height={64}
            src={iconSrc}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <h3
          className="font-serif absolute left-[40.5%] top-[58%] flex h-[65px] w-[85%] -translate-x-[40%] items-end text-[20px] font-bold leading-tight text-[#252839] 
          transition-all duration-300 ease-out 
          -translate-y-[80%] 
          group-hover:-translate-y-[120%] group-hover:text-yellow-400"
        >
          {title.toUpperCase()}
        </h3>

        <div
          className="absolute left-1/2 top-[60%] w-full -translate-x-1/2 translate-y-8 px-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
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

export default JobCard;
