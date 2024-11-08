'use client';
import { useSearchParams } from 'next/navigation';
import { default as OpenSeadragon } from 'openseadragon';
import { useEffect, useRef } from 'react';

export default function Deepzoom() {
  const viewerRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const deepzoom = params.get('deepzoom') ?? JSON.stringify({
    Image: {
      xmlns: "http://schemas.microsoft.com/deepzoom/2008",
      Url: "//openseadragon.github.io/example-images/duomo/duomo_files/",
      Format: "jpg",
      Overlap: "4",
      TileSize: "256",
      Size: {
        Width: "13920",
        Height: "10200"
      }
    }
  })
  const sea =
    useEffect(() => {
      if (viewerRef.current && deepzoom) {
        const viewer = OpenSeadragon({
          id: viewerRef.current.id,
          tileSources: JSON.parse(deepzoom)
        });

        // Clean up on unmount
        return () => {
          viewer.destroy();
        };
      }
    }, [deepzoom]);

  return (
    <div
      id="seadragon-viewer"
      ref={viewerRef}
      className='w-full'
      style={{ height: "600px" }}
    ></div>
  );
}
