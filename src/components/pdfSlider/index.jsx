import * as S from "./style.jsx";
import {CustomButton} from "./style.jsx";

export default function PdfSlider({ children }) {
  return(
    <Document
      file={pdfUrl}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      loading=""
    >
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => {
          // swiper 초기화 후 버튼에 연결
          setTimeout(() => {
            swiper.navigation.init();
            swiper.navigation.update();
          }, 0);
        }}
      >
        {Array.from(new Array(numPages), (_, i) => (
          <SwiperSlide key={i}>
            <Page pageNumber={i + 1} width={600} loading="" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 커스텀 버튼 */}
      <S.CustomButton className="custom-prev">◀</S.CustomButton>
      <S.CustomButton $direction={} className="custom-next">▶</S.CustomButton>
    </Document>
  )
}