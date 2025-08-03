import { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.mjs?url";
import * as S from "./style";
import leftArrow from "../../assets/write/leftArrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// PDF.js worker 설정
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PdfSwiper({ url, swiperId }) {
  const [numPages, setNumPages] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  if (!url) return <div>PDF 로딩 중...</div>;

  return (
    <div
      style={{ width: 600, margin: "auto", position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Document file={url} onLoadSuccess={({ numPages }) => setNumPages(numPages)} loading="">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: `.custom-next-${swiperId}`,
            prevEl: `.custom-prev-${swiperId}`,
          }}
          pagination={{
            clickable: true,
            el: `.pagination-container-${swiperId}`,
          }}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.navigation.init();
              swiper.navigation.update();
            }, 0);
          }}
        >

          {Array.from({ length: numPages }, (_, i) => (
            <SwiperSlide key={i}>
              <Page pageNumber={i + 1} width={600} />
            </SwiperSlide>
          ))}
        </Swiper>

        <S.PaginationContainer
          className={`pagination-container-${swiperId}`}
          $isHovered={isHovered}
        />

        <S.CustomButton
          onClick={() => {
            console.log("prev");
          }}
          $id="left"
          className={`custom-prev-${swiperId}`}
          $isHovered={isHovered}
        >
          <img src={leftArrow} />
        </S.CustomButton>
        <S.CustomButton
          $id="right"
          className={`custom-next-${swiperId}`}
          $isHovered={isHovered}
        >
          <img style={{ transform: "rotate(180deg)" }} src={leftArrow} />
        </S.CustomButton>
      </Document>
    </div>
  );
}