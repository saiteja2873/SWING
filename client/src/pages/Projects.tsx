import { FolderKanban, Award, Briefcase, IndianRupee, DollarSign } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sponsoredProjects, consultancyProjects } from "@/data/projects";

export default function Projects() {
  return (
    <Layout>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Funded & Consultancy Projects"
            subtitle="Research initiatives supported by government and industry partners"
            icon={FolderKanban}
          />

          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Sponsored Projects
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Government-funded research initiatives
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                {sponsoredProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-visible bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20"
                    data-testid={`sponsored-project-${project.id}`}
                  >
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription>
                            Sponsored by {project.sponsor}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-2xl font-bold text-primary">
                            <IndianRupee className="w-5 h-5" />
                            <span>{project.amount.replace("₹", "")}</span>
                          </div>
                          {project.date && (
                            <Badge variant="secondary" className="mt-2">
                              {project.date}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    {project.description && (
                      <CardContent>
                        <p className="text-muted-foreground">
                          {project.description}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-chart-2/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Consultancy Projects
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Industry collaboration and consulting work
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {consultancyProjects.map((project) => {
                  const isUSD = project.amount.includes("$");
                  return (
                    <Card
                      key={project.id}
                      className="overflow-visible"
                      data-testid={`consultancy-project-${project.id}`}
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription>{project.sponsor}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-1 text-xl font-bold text-chart-2">
                          {isUSD ? (
                            <DollarSign className="w-4 h-4" />
                          ) : (
                            <IndianRupee className="w-4 h-4" />
                          )}
                          <span>
                            {project.amount.replace("₹", "").replace("$", "")}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-visible text-center p-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-muted-foreground mb-6">
                We are always open to new research collaborations and consultancy opportunities with industry partners and academic institutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="text-base py-2 px-4">Government Funded Research</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Industry Consultancy</Badge>
                <Badge variant="outline" className="text-base py-2 px-4">Technical Training</Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
