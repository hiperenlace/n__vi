import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Pagination } from 'swiper/modules';
import { Box, Container, styled } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import brand1 from '../media/BRANDS/brand1.png';
import brand2 from '../media/BRANDS/brand2.png';
import brand3 from '../media/BRANDS/brand3.png';
import brand4 from '../media/BRANDS/brand4.png';
import brand5 from '../media/BRANDS/brand5.png';
import brand6 from '../media/BRANDS/brand1.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  const slidesPerView = isLg ? 5 : isSm ? 3 : 1; // 3 slides para lg, 2 slides para md, 1 slide para xs

  const logos = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
  ];
  return (
    <Box>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        autoplay={{ delay: 3000, disableOnInteraction:false }}
        loop={true}
      // pagination={{ clickable: true }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} height={"70px"} alt={`${logo} ${index}`} className={logo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};