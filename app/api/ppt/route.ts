// pages/api/upload.ts
import JSZip from 'jszip';
import { parseStringPromise } from 'xml2js';
import { NextRequest } from 'next/server';


// XML 구조에서 텍스트 요소 추출
function findTextElements(json: any): string[] {
  let textElements: string[] = [];

  function recursiveFindText(obj: any) {
    if (typeof obj === 'object') {
      for (const key in obj) {
        if (key === 'a:t') {
          textElements.push(...obj[key]);
        } else {
          recursiveFindText(obj[key]);
        }
      }
    }
  }

  recursiveFindText(json);
  return textElements;
}

// PPTX 파일에서 텍스트 길이 계산
async function countTextInPptx(data: ArrayBuffer): Promise<number> {
  const zip = await JSZip.loadAsync(data);

  let totalTextLength = 0;

  const slideFiles = Object.keys(zip.files).filter((fileName) =>
    fileName.startsWith('ppt/slides/slide')
  );

  for (const fileName of slideFiles) {
    const slideXml = await zip.file(fileName)?.async('text');
    if (slideXml) {
      const slideJson = await parseStringPromise(slideXml);
      const textElements = findTextElements(slideJson);
      const slideText = textElements.join('');
      totalTextLength += slideText.length;
    }
  }

  return totalTextLength;
}


const POST = async (request: NextRequest) => {
  const body = await request.formData()
  let textLength = 0
  // 파일 파싱 및 처리

  const pptxFile = body.get('file') as File;
  const pptxFilePath = await pptxFile.arrayBuffer()

  try {
    textLength = await countTextInPptx(pptxFilePath);
    console.log(textLength)

    // 글자 수 반환
  } catch (error) {
    console.error('Error processing PPTX file:', error);
  }
  return Response.json({ textLength })
}

export { POST }