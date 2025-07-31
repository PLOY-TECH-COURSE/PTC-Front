import { useState} from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.mjs?url";
import * as S from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PdfSwiper({url}) {
	const [numPages, setNumPages] = useState(0);
  console.log("PDF URL:", url); // 디버깅용 로그
  if(!url) return null; // url이 없을 경우 렌더링하지 않음
	return (
		<div
			style={{ width: '600px', margin: "auto", position: "relative" }}
			className="swiper-container"
		>
			<Document
				file={"https://storage.googleapis.com/ploytechcourse-version3/ca5f82d8-2bd8-449f-9552-78704b956b5e"}
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
				<S.CustomButton direction="prev" className="custom-prev" />
				<S.CustomButton direction="next" className="custom-next" />
			</Document>
		</div>
	);
}