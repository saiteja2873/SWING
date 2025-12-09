import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  icon: Icon,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      {Icon && (
        <div
          className={cn(
            "w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center mb-4",
            centered && "mx-auto"
          )}
        >
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "w-20 h-1 bg-gradient-to-r from-primary to-chart-2 rounded-full mt-4",
          centered && "mx-auto"
        )}
      />
    </div>
  );
}
