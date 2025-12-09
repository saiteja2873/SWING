import { GraduationCap, Users, UserPlus, Award } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  description: string;
}

interface StatsStripProps {
  stats: Stat[];
}

const icons = [GraduationCap, Users, UserPlus, Award];

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div
            key={stat.label}
            className="relative overflow-visible bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-xl p-6 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-foreground">
              {stat.label}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {stat.description}
            </div>
          </div>
        );
      })}
    </div>
  );
}
