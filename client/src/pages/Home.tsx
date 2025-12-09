import { Link } from "wouter";
import { ArrowRight, Network, Cpu, Shield, Code, MessageSquare, Wifi, BookOpen, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { researchAreas } from "@/data/researchAreas";

const iconMap: Record<string, typeof Network> = {
  Network,
  Cpu,
  MessageSquare,
  Code,
  Shield,
};

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-chart-2/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-lg shadow-primary/25">
                <Wifi className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground" />
              </div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-card border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">IIIT</div>
                  <div className="text-sm font-bold text-foreground">Kottayam</div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                SWING
              </span>{" "}
              @ IIIT Kottayam
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Smart Wireless Inter-Networking Research Group Website
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/research-areas">
                <Button size="lg" className="gap-2" data-testid="button-view-research">
                  View Research Areas
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" data-testid="button-contact-us">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Project Overview"
            subtitle="A comprehensive platform for academic research and collaboration"
            icon={BookOpen}
          />

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-visible">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Academic Research Group</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  A dedicated research group at Indian Institute of Information Technology Kottayam (IIIT Kottayam) focused on cutting-edge research in networking and computing.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-visible">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-chart-2" />
                </div>
                <CardTitle>Collaborative Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Bringing together faculty, students, industry experts, and external academicians to solve real-world problems through innovative research.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-visible">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6 text-chart-3" />
                </div>
                <CardTitle>Events & Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Organizing workshops, seminars, and international events to promote knowledge sharing and skill development in emerging technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Project Purpose"
            subtitle="Showcasing work, achievements, events, and activities of SWING"
          />

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-visible bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  This academic research group website serves as a comprehensive platform to showcase the work, achievements, events, and activities of the <strong>SWING (Smart Wireless Inter-Networking) Research Group</strong> at IIIT Kottayam.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Research Dissemination</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Student Recruitment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Industry Collaboration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Academic Networking</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Research Focus Areas"
            subtitle="Exploring the frontiers of technology through innovative research"
            icon={Network}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {researchAreas.slice(0, 3).map((area) => {
              const Icon = iconMap[area.icon];
              return (
                <Card key={area.id} className="overflow-visible group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-2 group-hover:from-primary/30 group-hover:to-chart-2/30 transition-colors">
                      {Icon && <Icon className="w-6 h-6 text-primary" />}
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {area.topics.slice(0, 2).map((topic, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {topic.name}
                        </Badge>
                      ))}
                      {area.topics.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{area.topics.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/research-areas">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-research">
                View All Research Areas
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">1</div>
              <div className="text-sm font-medium text-foreground">Granted Patent</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-chart-2/10 to-chart-2/5 border border-chart-2/20">
              <div className="text-4xl font-bold text-chart-2 mb-2">10+</div>
              <div className="text-sm font-medium text-foreground">Publications</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-chart-3/10 to-chart-3/5 border border-chart-3/20">
              <div className="text-4xl font-bold text-chart-3 mb-2">₹8L+</div>
              <div className="text-sm font-medium text-foreground">Funded Projects</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-chart-4/10 to-chart-4/5 border border-chart-4/20">
              <div className="text-4xl font-bold text-chart-4 mb-2">5+</div>
              <div className="text-sm font-medium text-foreground">Major Events</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
