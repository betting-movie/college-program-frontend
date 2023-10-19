import { Box, styled } from "@mui/material";

import React from "react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { useMobile } from "@/src/utils/findViewPort";
import { MemoizedExamCard } from "../College/examCard";
import { useDevice } from "@/src/utils/findDeviceView";

const CustomExamDataSwiper = styled(Box)(({ theme, ignorePadding }) => ({
  ".image-section": {
    objectFit: "contain",
    width: "100% !important",
    position: "relative !important",
  },
  ".image-section-2": {
    objectFit: "contain",
    // width: "100% !important",
    position: "relative !important",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    //padding: ignorePadding ? "0px" : "0px 0px 20px 20px",
    margin: "0px",
  },
}));

const ExamDataSwiper = ({
  data,

  ignorePadding,
  slideReq,
}) => {
  const isMobile = useMobile();
  const device = useDevice();

  return (
    <CustomExamDataSwiper ignorePadding={ignorePadding}>
      <Box>
        <Swiper
          slidesPerView={device === 2 ? 1.2 : device === 3 ? 2.6 : 3.8}
          spaceBetween={isMobile ? 10 : 20}
          pagination={false}
          loop={true}
          modules={[Pagination]}
        >
          {data?.map((res, index) => {
            return (
              <SwiperSlide key={index}>
                <MemoizedExamCard info={res} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </CustomExamDataSwiper>
  );
};

export const MemoizedExamDataSwiper = React.memo(ExamDataSwiper);
