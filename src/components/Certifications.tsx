import CertCard from './CertCard';
import { useMediaQuery } from 'react-responsive';
import { A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

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
		<div>
			<Swiper
				modules={[Pagination, A11y]}
				spaceBetween={20}
				slidesPerView={isLarge ? 3 : 1}
				pagination={{ clickable: true }}>
				{certs.map(cert => (
					<SwiperSlide key={cert.id}>
						<CertCard {...cert} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Certifications;
