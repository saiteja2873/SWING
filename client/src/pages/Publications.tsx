import { BookOpen, FileText, Mic, ExternalLink } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  publicationVenues,
  keyResearchAreas,
  publicationStats,
} from "@/data/researchOutput";

const talks = [
  {
    id: "talk-1",
    title: "Future of Software Defined Networks",
    venue: "IEEE Conference 2023",
    speaker: "Dr. Koppala Guravaiah",
  },
  {
    id: "talk-2",
    title: "IoT Security Challenges and Solutions",
    venue: "National Workshop on IoT",
    speaker: "Dr. Bhanu Chander",
  },
  {
    id: "talk-3",
    title: "AI/ML in Network Management",
    venue: "IIIT Kottayam Tech Talk Series",
    speaker: "Dr. Sri Harsha K",
  },
];

export default function Publications() {
  return (
    <Layout>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Publications & Talks"
            subtitle="Research publications and invited talks by SWING members"
            icon={BookOpen}
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Publications Summary
                </h3>
              </div>

              <Card className="overflow-visible mb-6">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl font-bold text-primary">
                      {publicationStats.totalPapers}
                    </div>
                    <div>
                      <CardTitle className="text-lg">Research Papers</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Published in international venues
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="overflow-visible">
                <CardHeader>
                  <CardTitle>Publication Venues</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {publicationVenues.map((venue) => (
                    <div
                      key={venue.id}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <Badge
                        variant={venue.type === "journal" ? "default" : "secondary"}
                        className="shrink-0 mt-0.5"
                      >
                        {venue.type === "journal" ? "Journal" : "Conference"}
                      </Badge>
                      <span className="text-sm text-foreground">{venue.venue}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-foreground mb-3">
                  Research Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {keyResearchAreas.map((area) => (
                    <Badge key={area.id} variant="outline">
                      {area.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-chart-2/20 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-chart-2" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Invited Talks
                </h3>
              </div>

              <div className="space-y-4">
                {talks.map((talk) => (
                  <Card
                    key={talk.id}
                    className="overflow-visible"
                    data-testid={`talk-${talk.id}`}
                  >
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-2">
                        {talk.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="secondary">{talk.venue}</Badge>
                        <span>by {talk.speaker}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="overflow-visible mt-6 bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ExternalLink className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">
                      Full Publication List
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    For a complete list of publications with citations and links, please visit Google Scholar or contact the research group directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
