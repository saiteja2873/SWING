import { Image } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <Layout>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Photo Gallery"
            subtitle="Glimpses from our events, workshops, and research activities"
            icon={Image}
          />

          <GalleryGrid images={galleryImages} />

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Click on any image to view it in full size. More photos will be added as events are organized.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
