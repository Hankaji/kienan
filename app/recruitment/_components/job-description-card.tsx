import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface JobDescriptionCardProps {
  title: string;
  description: string;
  department: string;
  location: string;
  type: string;
  onApply?: () => void;
  className?: string;
}

const JobDescriptionCard: React.FC<JobDescriptionCardProps> = ({
  title,
  description,
  department,
  location,
  type,
  onApply,
  className,
}) => {
  return (
    <Card
      className={cn(
        "p-6 hover:shadow-lg transition-shadow duration-300 border-border bg-white",
        className
      )}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

        {/* Left Section: Content */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="mb-2 text-xl font-bold text-foreground">
              {title}
            </h3>
            <p className="text-muted-foreground">
              {description}
            </p>
          </div>

          {/* Meta Tags Row */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {/* Department */}
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <span>{department}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{location}</span>
            </div>

            {/* Type */}
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>{type}</span>
            </div>
          </div>
        </div>

        {/* Right Section: Action Button */}
        <Button
          onClick={onApply}
          className="whitespace-nowrap font-semibold px-6 py-2"
        >
          Ứng Tuyển
        </Button>
      </div>
    </Card>
  );
};

export default JobDescriptionCard;
