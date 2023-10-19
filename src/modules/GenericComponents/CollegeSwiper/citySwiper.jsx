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
import { resolve } from "styled-jsx/css";
import { MemoizedcityCard } from "../College/cityCards";
import { useDevice } from "@/src/utils/findDeviceView";

const CustomCityDataSwiper = styled(Box)(({ theme, ignorePadding }) => ({
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

const CityDataSwiper = ({
  data,

  ignorePadding,
  slideReq,
}) => {
  const isMobile = useMobile();
  const device = useDevice();

  return (
    <CustomCityDataSwiper ignorePadding={ignorePadding}>
      <Box>
        <Swiper
          slidesPerView={device === 2 ? 2.1 : device === 3 ? 4.6 : 6.2}
          spaceBetween={isMobile ? 10 : 20}
          pagination={false}
          loop={true}
          modules={[Pagination]}
        >
          {data?.map((res, index) => {
            return (
              <SwiperSlide key={index}>
                <MemoizedcityCard info={res} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </CustomCityDataSwiper>
  );
};

export const MemoizedCityDataSwiper = React.memo(CityDataSwiper);
