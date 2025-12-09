import { useState } from "react";
import { X, Image as ImageIcon } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  event?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (id: string) => {
    setImageErrors((prev) => new Set(prev).add(id));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-card border border-border"
            onClick={() => setSelectedImage(image)}
            data-testid={`gallery-image-${image.id}`}
          >
            {imageErrors.has(image.id) ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
                <ImageIcon className="w-12 h-12 text-muted-foreground mb-2" />
                <span className="text-sm text-muted-foreground">{image.title}</span>
              </div>
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={() => handleImageError(image.id)}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-medium text-sm mb-1">
                  {image.title}
                </h3>
                {image.event && (
                  <p className="text-white/80 text-xs">{image.event}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close"
                data-testid="button-close-gallery"
              >
                <X className="w-4 h-4" />
              </button>
              {imageErrors.has(selectedImage.id) ? (
                <div className="aspect-video flex flex-col items-center justify-center bg-muted">
                  <ImageIcon className="w-20 h-20 text-muted-foreground mb-4" />
                  <span className="text-lg text-muted-foreground">{selectedImage.title}</span>
                </div>
              ) : (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto"
                  onError={() => handleImageError(selectedImage.id)}
                />
              )}
              <div className="p-4 bg-card">
                <h3 className="font-semibold text-foreground">
                  {selectedImage.title}
                </h3>
                {selectedImage.event && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedImage.event}
                  </p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
