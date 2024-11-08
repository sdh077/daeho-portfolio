import { NextRequest } from 'next/server';
import { generateTiles } from './tile-generator'
import path from 'path';
import fs from 'fs-extra'
import { promises as pfs } from 'fs';

const GET = async (request: NextRequest,
) => {
  const imageName = 'carina-nebula.jpg'
  const imagePath = `public/${imageName}`
  const tileOutputDir = path.join('public', 'tiles', imageName);
  const res = await generateTiles(imagePath, tileOutputDir)
  console.log(res)
  return Response.json({ res })

}
import { NEXT_PUBLIC_API_URL } from "@/lib/constants"


export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    // Check if the file exists and is a Blob
    if (!file || !(file instanceof Blob)) {
      return new Response(JSON.stringify({ res: 'fail', message: 'Invalid file' }), { status: 400 });
    }

    // Convert the Blob to a Buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(process.cwd(), 'public', file.name);

    // Save the file
    await pfs.writeFile(filePath, buffer);

    // return new Response(JSON.stringify({ res: 'success', filePath }), { status: 200 });
    const imagePath = `${file.name}`
    const tileOutputDir = path.join('public', 'tiles', file.name);
    const res = await generateTiles(imagePath, tileOutputDir)
    return Response.json({ res })
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ res: 'fail', error: '' }), { status: 500 });
  }
}
export { GET }