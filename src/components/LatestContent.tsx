import { useMediaQuery } from 'react-responsive';
import ProjectCard from './ProjectCard';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const LatestContent = () => {
	const split = useMediaQuery({
		query: '(min-width: 800px)',
		minDeviceWidth: 800,
		type: 'screen',
	});

	const quad = useMediaQuery({
		query: '(min-width: 1500px)',
		minDeviceWidth: 1500,
		type: 'screen',
	});

	const items = [
		{
			id: 0,
			title: 'BLACK SHEEP WORLD',
			desc: 'Ecommerce web app built with Next.js that utilizes lambda functions to efficiently perform crucial functionality.',
			pic: 'https://d1suwrqf4r82dt.cloudfront.net/ecommPreview.webp',
			url: 'https://dev.d2ev7e5869alah.amplifyapp.com',
			urlGH: 'https://github.com/duncanmatt/ecomm_next',
		},
		{
			id: 1,
			title: 'FF AUXILIARY',
			desc: 'Web app made with Next.js which consolidates necessary information for efficient draft research.',
			pic: 'https://d1suwrqf4r82dt.cloudfront.net/ffPreview.webp',
			url: 'https://ffauxiliary.com',
			urlGH: 'https://github.com/duncanmatt/fantasy-football',
		},
		{
			id: 2,
			title: 'GITHUB FINDER',
			desc: 'React app that gives users the ability to search for and view profiles on GitHub by making use of the GitHub API.',
			pic: 'https://d1suwrqf4r82dt.cloudfront.net/ghPreview.webp',
			url: 'https://github-finder-rho-ivory.vercel.app/',
			urlGH: 'https://github.com/duncanmatt/github-finder',
		},
		{
			id: 3,
			title: 'HOUSE MARKETPLACE',
			desc: 'React app for posting or viewing real estate listings that are stored with firebase',
			pic: 'https://d1suwrqf4r82dt.cloudfront.net/rePreview.webp',
			url: 'https://house-marketplace-nu-ochre.vercel.app/',
			urlGH: 'https://github.com/duncanmatt/house-marketplace',
		},
	];

	return (
		<>
			<div>
				<Swiper
					modules={[Pagination, A11y]}
					spaceBetween={20}
					slidesPerView={quad ? 4 : split ? 2 : 'auto'}
					pagination={{ clickable: true }}>
					{items.map(item => (
						<SwiperSlide key={item.id}>
							<ProjectCard {...item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default LatestContent;
