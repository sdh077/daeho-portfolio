'use client'
// 클라이언트에서 API 호출 예시 (Next.js 페이지 컴포넌트에서 사용 가능)
import { useState } from 'react';

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [alertText, setAlert] = useState('')
  const [textLength, setTextLength] = useState<number | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.files[0].size > 1000000) {
        setFile(null)
        setTextLength(null)
        setAlert(`용량이 1메가를 넘깁니다 size:${e.target.files[0].size / 1000000}mb`)
      }
      else {
        setAlert('')
        setFile(e.target.files[0]);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/ppt', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    setTextLength(result.textLength);
  };

  return (
    <div>
      <h1>Upload PPTX File</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pptx" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {alertText}
      {textLength !== null && <p>Total text length: {textLength}</p>}
    </div>
  );
}
