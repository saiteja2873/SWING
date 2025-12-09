import { FileText, Award, BookOpen, Lightbulb } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  patents,
  publicationVenues,
  keyResearchAreas,
  publicationStats,
} from "@/data/researchOutput";

export default function ResearchOutput() {
  return (
    <Layout>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Research Output"
            subtitle="Patents, publications, and contributions to the scientific community"
            icon={FileText}
          />

          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Patents
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Intellectual property and innovations
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                {patents.map((patent) => (
                  <Card
                    key={patent.id}
                    className="overflow-visible bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20"
                    data-testid={`patent-${patent.id}`}
                  >
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">
                            {patent.title}
                          </CardTitle>
                          <div className="flex flex-wrap gap-2">
                            <Badge>Patent No: {patent.patentNumber}</Badge>
                            <Badge variant="secondary">{patent.year}</Badge>
                          </div>
                        </div>
                        <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                          <Award className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-chart-2/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Research Publications
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Published in top international venues
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <Card className="overflow-visible">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-4xl font-bold text-primary">
                        {publicationStats.totalPapers}
                      </span>
                      <span className="text-lg text-muted-foreground">Papers</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Published in {publicationStats.venues}
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-visible">
                  <CardHeader>
                    <CardTitle>Publication Venues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {publicationVenues.map((venue) => (
                        <div
                          key={venue.id}
                          className="flex items-center gap-2"
                          data-testid={`venue-${venue.id}`}
                        >
                          <Badge
                            variant={venue.type === "journal" ? "default" : "secondary"}
                            className="shrink-0"
                          >
                            {venue.type === "journal" ? "Journal" : "Conference"}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {venue.venue}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-chart-3/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-chart-3" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Key Research Areas
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Focus areas of published research
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {keyResearchAreas.map((area) => (
                  <Card
                    key={area.id}
                    className="overflow-visible text-center p-6"
                    data-testid={`key-area-${area.id}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mx-auto mb-3">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-medium text-foreground">{area.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
