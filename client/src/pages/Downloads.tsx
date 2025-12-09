import { Download, FileText, FileArchive, Presentation } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { downloadItems } from "@/data/links";

const fileIcons: Record<string, typeof FileText> = {
  PDF: FileText,
  ZIP: FileArchive,
  PPTX: Presentation,
};

export default function Downloads() {
  return (
    <Layout>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Downloadable Resources"
            subtitle="Brochures, schedules, and research materials"
            icon={Download}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadItems.map((item) => {
              const FileIcon = fileIcons[item.fileType] || FileText;
              return (
                <Card
                  key={item.id}
                  className="overflow-visible flex flex-col"
                  data-testid={`download-item-${item.id}`}
                >
                  <CardHeader className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <FileIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{item.fileType}</Badge>
                        {item.size && (
                          <Badge variant="outline">{item.size}</Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full gap-2"
                      variant="outline"
                      asChild
                      data-testid={`button-download-${item.id}`}
                    >
                      <a href={item.downloadUrl} download>
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-visible p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need More Resources?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you need additional materials, research papers, or presentation slides from any of our events, please contact us directly.
              </p>
              <p className="text-sm text-muted-foreground">
                Note: Some resources may be added or updated after events are completed. Check back regularly for new materials.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
