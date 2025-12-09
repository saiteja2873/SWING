import { Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  details?: string[];
  resourcePersons?: string[];
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-primary/20" />

      <div className="space-y-8">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            data-testid={`timeline-event-${event.id}`}
          >
            <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background z-10" />

            <div className="flex-1 md:w-1/2" />

            <div className="flex-1 md:w-1/2 pl-10 md:pl-0">
              <Card className="overflow-visible border-primary/20">
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="secondary" className="gap-1">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                  {event.details && event.details.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-foreground">Topics Covered:</p>
                      <ul className="space-y-1">
                        {event.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-3 h-3 text-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {event.resourcePersons && event.resourcePersons.length > 0 && (
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs font-medium text-foreground mb-1">Resource Persons from:</p>
                      <div className="flex flex-wrap gap-1">
                        {event.resourcePersons.map((person, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {person}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
