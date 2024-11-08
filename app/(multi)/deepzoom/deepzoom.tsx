'use client';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { default as OpenSeadragon } from 'openseadragon';
import { useEffect, useRef } from 'react';

export default function Deepzoom({ deepzoom, className }: { deepzoom: "두오모" | "돈까스" | "nebula", className?: string }) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const dzi: { [x: string]: any } = {
    "두오모": {
      xmlns: "http://schemas.microsoft.com/deepzoom/2008",
      Url: "//openseadragon.github.io/example-images/duomo/duomo_files/",
      Format: "jpg",
      Overlap: "4",
      TileSize: "256",
      Size: {
        Width: "13920",
        Height: "10200"
      }
    },
    "돈까스": {
      "xmlns": "http://schemas.microsoft.com/deepzoom/2008",
      "Url": "http://localhost:3000/tiles/11684682.jpg/deepzoom_files/",
      "Format": "jpeg",
      "Overlap": "2",
      "TileSize": "256",
      "Size": {
        "Width": "1280",
        "Height": "960"
      }
    },
    "nebula": {
      "xmlns": "http://schemas.microsoft.com/deepzoom/2008",
      "Url": "http://localhost:3000/tiles/carina-nebula-6000x2906.jpg/deepzoom_files/",
      "Format": "jpeg",
      "Overlap": "2",
      "TileSize": "256",
      "Size": {
        "Width": "6000",
        "Height": "2906"
      }
    }
  }
  useEffect(() => {

    if (viewerRef.current) {
      const viewer = OpenSeadragon({
        id: viewerRef.current.id,
        tileSources: {
          Image: dzi[deepzoom]
        }
      });

      // Clean up on unmount
      return () => {
        viewer.destroy();
      };
    }
  }, [deepzoom]);

  return (
    <div
      id={"seadragon-viewer-" + deepzoom}
      ref={viewerRef}
      className={cn(className, 'border-2')}
      style={{ height: "300px" }}
    ></div>
  );
}
