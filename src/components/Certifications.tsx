import CertCard from './CertCard';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type Certification = {
  id: number;
  pic: string;
  desc: string;
  url: string;
};

type Certifications = {
  certs: Array<Certification>;
};

const Certifications = ({ certs }: Certifications) => {
  const isLarge = useMediaQuery({
    query: '(min-width: 925px)',
    minDeviceWidth: 925,
    type: 'screen',
  });

  return (
    <div className='certifications'>
      <Swiper
        spaceBetween={50}
        slidesPerView={isLarge ? 3 : 1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {certs.map((cert) => (
          <SwiperSlide key={cert.id}>
            <CertCard {...cert} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Certifications;
