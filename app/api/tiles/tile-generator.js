const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

// 타일 크기 및 줌 레벨 설정
const TILE_SIZE = 256;
const MAX_ZOOM_LEVEL = 8;

async function generateTiles(imagePath, outputDir) {
  const image = sharp(`public/${imagePath}`);
  const metadata = await image.metadata();
  const { width, height, format } = metadata;

  for (let z = 0; z <= MAX_ZOOM_LEVEL; z++) {
    const zoomDir = path.join(outputDir, `${z}`);
    await fs.ensureDir(zoomDir);

    const scale = Math.pow(2, -z);
    const zoomWidth = Math.floor(width * scale);
    const zoomHeight = Math.floor(height * scale);
    const resizedImage = await image.clone().resize(zoomWidth, zoomHeight).toBuffer();
    await sharp(resizedImage)
      .tile({
        size: 256,
        overlap: 2,
        basename: 'deepzoom'
      })
      .toFile(zoomDir);
    // for (let x = 0; x < Math.ceil(zoomWidth / TILE_SIZE); x++) {
    //   for (let y = 0; y < Math.ceil(zoomHeight / TILE_SIZE); y++) {
    //     const tilePath = path.join(zoomDir, `${x}_${y}.jpg`);
    //     await sharp(resizedImage)
    //       .extract({
    //         left: x * TILE_SIZE,
    //         top: y * TILE_SIZE,
    //         width: Math.min(TILE_SIZE, zoomWidth - x * TILE_SIZE),
    //         height: Math.min(TILE_SIZE, zoomHeight - y * TILE_SIZE),
    //       })
    //       .toFile(tilePath);
    //   }
    // }
  }

  // Deep Zoom 형식의 메타데이터 반환
  return {
    Image: {
      xmlns: "http://schemas.microsoft.com/deepzoom/2008",
      Url: `http://localhost:3000/tiles/${path.basename(imagePath)}/deepzoom_files/`,
      Format: format,
      Overlap: "2",
      TileSize: TILE_SIZE.toString(),
      Size: {
        Width: width.toString(),
        Height: height.toString()
      }
    }
  };
}

module.exports = { generateTiles };
