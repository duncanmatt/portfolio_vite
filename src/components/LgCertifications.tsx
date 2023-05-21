import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CertCard from './CertCard';

type Certification = {
	id: number;
	pic: string;
	desc: string;
	url: string;
};

type Certifications = {
	certs: Array<Certification>;
};

function LgCertifications({ certs }: Certifications) {
	return (
		<div className='certificationsLg'>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}>
				{certs.map(cert => (
					<SwiperSlide key={cert.id}>
						<CertCard {...cert} />
					</SwiperSlide>
				))}
				...
			</Swiper>
		</div>
	);
}

export default LgCertifications;
