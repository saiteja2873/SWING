import { Calendar } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";
import { events } from "@/data/events";

export default function Events() {
  return (
    <Layout>
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Major Events Organized"
            subtitle="Workshops, seminars, and conferences organized by SWING"
            icon={Calendar}
          />

          <Timeline events={events} />
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Upcoming Events
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay tuned for upcoming workshops, seminars, and research events organized by the SWING research group. Follow us on social media for the latest updates.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">
                Check back soon for new events!
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
