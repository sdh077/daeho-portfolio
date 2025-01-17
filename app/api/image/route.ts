// app/api/upload/route.ts
import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(req: Request) {
  try {
    // Read the uploaded file
    const data = await req.blob();
    const arrayBuffer = await data.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Load image using Sharp
    const image = sharp(buffer);
    const { width, height } = await image.metadata();

    if (!width || !height) {
      return NextResponse.json({ error: 'Invalid image' }, { status: 400 });
    }

    const gridSize = 64;
    const blockWidth = Math.floor(width / gridSize);
    const blockHeight = Math.floor(height / gridSize);

    // Resize image to ensure it's divisible by grid size
    const resizedImage = await image.resize({
      width: blockWidth * gridSize,
      height: blockHeight * gridSize,
    }).raw().toBuffer();

    const blocks: number[][] = [];

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const blockStartX = x * blockWidth;
        const blockStartY = y * blockHeight;

        // Extract block
        const block = sharp(resizedImage, {
          raw: {
            width: blockWidth * gridSize,
            height: blockHeight * gridSize,
            channels: 3,
          },
        })
          .extract({
            left: blockStartX,
            top: blockStartY,
            width: blockWidth,
            height: blockHeight,
          })
          .raw()
          .toBuffer();

        const blockBuffer = await block;

        // Calculate average color for the block
        const [r, g, b] = [0, 1, 2].map(channel => {
          let sum = 0;
          for (let i = channel; i < blockBuffer.length; i += 3) {
            sum += blockBuffer[i];
          }
          return Math.round(sum / (blockBuffer.length / 3));
        });

        // Store block color
        blocks.push([r, g, b]);
      }
    }

    // Create a new image with solid color blocks (adding a LEGO-like effect)
    const outputBuffer = Buffer.alloc(blockWidth * blockHeight * gridSize * gridSize * 3);

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const [r, g, b] = blocks[y * gridSize + x];

        for (let by = 0; by < blockHeight; by++) {
          for (let bx = 0; bx < blockWidth; bx++) {
            const pixelIndex =
              ((y * blockHeight + by) * blockWidth * gridSize + x * blockWidth + bx) * 3;

            // Apply a gradient effect to mimic LEGO brick lighting
            const brightnessFactor = 1 - (by / blockHeight) * 0.2; // Darken towards the bottom
            outputBuffer[pixelIndex] = Math.min(255, Math.round(r * brightnessFactor));
            outputBuffer[pixelIndex + 1] = Math.min(255, Math.round(g * brightnessFactor));
            outputBuffer[pixelIndex + 2] = Math.min(255, Math.round(b * brightnessFactor));
          }
        }
      }
    }

    const finalImage = sharp(outputBuffer, {
      raw: {
        width: blockWidth * gridSize,
        height: blockHeight * gridSize,
        channels: 3,
      },
    }).png();

    const finalImageBuffer = await finalImage.toBuffer();

    return new Response(finalImageBuffer, {
      headers: {
        'Content-Type': 'image/png',
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to process image' }, { status: 500 });
  }
}
