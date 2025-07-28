import * as pdfjsLib from 'pdfjs-dist';
import axiosInstance from "../lib/axiosInstance.js";

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
export const sendPDFImagesToBackend = async (file) => {
  const arrayBuffer = await file.arrayBuffer();

  // 2. pdfjsLib에 전달
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  const numPages = pdf.numPages;


  const images = [];
  for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const scale = 0.5;
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
      canvasContext: context,
      viewport,
    }).promise;

    // canvas → Blob 변환
    await new Promise((resolve) => {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          console.error('Blob 변환 실패');
          resolve();
          return;
        }

        // Blob → File (파일명과 타입 지정)
        const file = new File([blob], `page-${pageNum}.png`, {
          type: 'image/png',
        });

        // FormData 생성
        const formData = new FormData();
        formData.append('file', file);

        // Backend로 파일 전송
        try{
          const res = await axiosInstance.post('/S3', formData, {
            headers:{
              'Content-Type': 'multipart/form-data'
            }
          });
          if(res.status === 200){
            images.push(res.data);
          }
        }catch (err){
          console.log(err);
        }

        resolve();
      }, 'image/png');
    });
  }
  return images
};