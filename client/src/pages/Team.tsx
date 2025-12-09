import { Users, User, Building2, Briefcase, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { StatsStrip } from "@/components/StatsStrip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { teamCategories, teamStats } from "@/data/team";

const categoryIcons: Record<string, typeof Users> = {
  "internal-faculty": Building2,
  "external-academicians": Users,
  "industry-experts": Briefcase,
};

export default function Team() {
  return (
    <Layout>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Team"
            subtitle="Meet the researchers and experts driving innovation at SWING"
            icon={Users}
          />

          <div className="space-y-16">
            {teamCategories.map((category) => {
              const CategoryIcon = categoryIcons[category.id] || Users;
              return (
                <div key={category.id} data-testid={`team-category-${category.id}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.members.map((member) => (
                      <Card
                        key={member.id}
                        className={`overflow-visible ${
                          member.isLead
                            ? "border-primary/30 bg-gradient-to-br from-primary/5 to-chart-2/5"
                            : ""
                        }`}
                        data-testid={`team-member-${member.id}`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar className="w-14 h-14 border-2 border-border">
                              <AvatarFallback className="bg-gradient-to-br from-primary to-chart-2 text-primary-foreground text-lg">
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .slice(0, 2)
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="font-semibold text-foreground">
                                  {member.name}
                                </h4>
                                {member.isLead && (
                                  <Badge className="gap-1 bg-primary/20 text-primary border-primary/30">
                                    <Star className="w-3 h-3" />
                                    Lead
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                {member.role}
                              </p>
                              {member.affiliation && (
                                <Badge variant="outline" className="mt-2 text-xs">
                                  {member.affiliation}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Team Statistics"
            subtitle="Our growing community of researchers and students"
          />
          <StatsStrip stats={teamStats} />
        </div>
      </section>
    </Layout>
  );
}
