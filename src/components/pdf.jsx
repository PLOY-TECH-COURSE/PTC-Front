import {useEffect, useState} from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.mjs?url";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import axios from "axios";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PdfSwiperCustom() {
	const [numPages, setNumPages] = useState(0);
	
	const [pdfUrl, setPdfUrl] = useState(null);
	const pdfSource = 'https://storage.googleapis.com/ploytechcourse-version3/431f18aa-639f-4a21-af5f-c56a6672f7ac';
	
	useEffect(() => {
		// const fetchPdf = async () => {
		// 	try {
		// 		const res = await axios.get(
		// 			`http://localhost:4000/proxy-pdf?url=${encodeURIComponent(pdfSource)}`,
		// 			{ responseType: 'blob' }
		// 		);
		//
		// 		const blobUrl = URL.createObjectURL(res.data);
		// 		setPdfUrl(blobUrl);
		// 	} catch (err) {
		// 		console.error('PDF 가져오기 실패:', err);
		// 	}
		// };
		
		const fetchPDF = async () => {
			try {
				const res = await fetch("https://storage.googleapis.com/ploytechcourse-version3/431f18aa-639f-4a21-af5f-c56a6672f7ac", {
					method: "GET",
					mode: "cors"
				});
				console.log(res);
			} catch (err) {
				console.log(err);
			}
		};
		
		fetchPDF(); // 호출
	}, []);
	return (
		<div
			style={{ width: 600, margin: "auto", position: "relative" }}
			className="swiper-container"
		>
			<Document
				file={"https://storage.googleapis.com/ploytechcourse-version3/431f18aa-639f-4a21-af5f-c56a6672f7ac"}
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
				<button className="custom-prev">◀</button>
				<button className="custom-next">▶</button>
			</Document>
			<style>{`
        .custom-prev,
        .custom-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          font-size: 24px;
          padding: 8px 12px;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 10;
          user-select: none;
        }
        .custom-prev {
          left: 10px;
        }
        .custom-next {
          right: 10px;
        }
        .swiper-container:hover .custom-prev,
        .swiper-container:hover .custom-next {
          opacity: 1;
        }

        /* pagination 커스텀 */
        .swiper-pagination-bullet {
          background: gray;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: black;
          opacity: 1;
        }
      `}</style>
		</div>
	);
}