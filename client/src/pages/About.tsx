import { Info, Target, Users, Briefcase, Lightbulb, GraduationCap, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  researchImpact,
  studentInvolvement,
  industryConnect,
  targetAudience,
  futureEnhancements,
  conclusionText,
} from "@/data/highlights";

const highlightIcons: Record<string, typeof Target> = {
  "research-impact": Target,
  "student-involvement": GraduationCap,
  "industry-connect": Briefcase,
};

export default function About() {
  const highlights = [researchImpact, studentInvolvement, industryConnect];

  return (
    <Layout>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About SWING"
            subtitle="Content highlights and key information about our research group"
            icon={Info}
          />

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {highlights.map((highlight) => {
              const Icon = highlightIcons[highlight.id] || Target;
              return (
                <Card
                  key={highlight.id}
                  className="overflow-visible"
                  data-testid={`highlight-${highlight.id}`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{highlight.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {highlight.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Target Audience
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {targetAudience.map((audience) => (
                  <Badge
                    key={audience.id}
                    variant="secondary"
                    className="text-sm py-2 px-4"
                    data-testid={`audience-${audience.id}`}
                  >
                    {audience.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-chart-2/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-chart-2" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Future Enhancement Opportunities
                </h3>
              </div>
              <Card className="overflow-visible">
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {futureEnhancements.map((enhancement) => (
                      <li
                        key={enhancement.id}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        data-testid={`enhancement-${enhancement.id}`}
                      >
                        <ArrowRight className="w-4 h-4 text-chart-2 shrink-0" />
                        <span>{enhancement.title}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-visible bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
            <CardContent className="p-8 sm:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {conclusionText.title}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {conclusionText.description}
              </p>
              <div className="p-4 rounded-lg bg-background/50 border border-border">
                <p className="text-sm text-muted-foreground">
                  {conclusionText.architecture}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Legacy Note
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This website was originally developed using PHP, HTML, CSS, JavaScript, Bootstrap, jQuery, and Owl Carousel. The current version has been rebuilt with modern technologies including React, TypeScript, and Tailwind CSS for improved performance and maintainability.
          </p>
        </div>
      </section>
    </Layout>
  );
}
