import { Network, Cpu, MessageSquare, Code, Shield, ChevronRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { researchAreas } from "@/data/researchAreas";

const iconMap: Record<string, typeof Network> = {
  Network,
  Cpu,
  MessageSquare,
  Code,
  Shield,
};

export default function ResearchAreas() {
  return (
    <Layout>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Research Focus Areas"
            subtitle="Exploring cutting-edge technologies across multiple domains"
            icon={Network}
          />

          <div className="grid lg:grid-cols-2 gap-6">
            {researchAreas.map((area) => {
              const Icon = iconMap[area.icon];
              return (
                <Card
                  key={area.id}
                  className="overflow-visible"
                  data-testid={`research-area-${area.id}`}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shrink-0">
                        {Icon && <Icon className="w-7 h-7 text-primary-foreground" />}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="pl-0 lg:pl-[72px]">
                      <h4 className="text-sm font-medium text-foreground mb-3">Research Topics:</h4>
                      <ul className="space-y-2">
                        {area.topics.map((topic, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{topic.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Research Topics at a Glance"
            subtitle="Quick overview of all research areas and topics"
          />

          <Accordion type="single" collapsible className="space-y-4">
            {researchAreas.map((area) => {
              const Icon = iconMap[area.icon];
              return (
                <AccordionItem
                  key={area.id}
                  value={area.id}
                  className="border border-border rounded-lg overflow-hidden bg-background"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {Icon && <Icon className="w-5 h-5 text-primary" />}
                      </div>
                      <span className="font-semibold text-left">{area.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="pl-[52px] space-y-3">
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {area.topics.map((topic, index) => (
                          <Badge key={index} variant="secondary">
                            {topic.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
}
