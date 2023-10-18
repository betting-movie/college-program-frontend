import { Box, styled } from "@mui/material";

import React from "react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { MemoizedCollegeCard } from "../College/collegeCard";
import { useMobile } from "@/src/utils/findViewPort";
import { MemoizedCollegeCategory } from "../College/collegeCategory";

const CustomCategoryDataSwiper = styled(Box)(({ theme, ignorePadding }) => ({
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

const CategoryDataSwiper = ({
  data,

  ignorePadding,
  slideReq,
}) => {
  const isMobile = useMobile();

  return (
    <CustomCategoryDataSwiper ignorePadding={ignorePadding}>
      <Box>
        <Swiper
          slidesPerView={isMobile ? slideReq ?? 1.4 : 4.1}
          spaceBetween={isMobile ? 10 : 20}
          pagination={false}
          loop={true}
          modules={[Pagination]}
        >
          {data?.map((res, index) => {
            return (
              <SwiperSlide key={index}>
                <MemoizedCollegeCategory info={res} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </CustomCategoryDataSwiper>
  );
};

export const MemoizedCategoryDataSwiper = React.memo(CategoryDataSwiper);
