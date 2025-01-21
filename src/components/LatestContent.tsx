import { useMediaQuery } from 'react-responsive';
import ProjectCard from './ProjectCard';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const items = [
	{
		id: 0,
		title: 'Black Sheep World',
		desc: 'Ecommerce web app built with Next.js that utilizes lambda functions to efficiently perform crucial functionality.',
		pic: 'https://d1suwrqf4r82dt.cloudfront.net/ecommPreview.webp',
		url: 'https://dev.d2ev7e5869alah.amplifyapp.com',
		urlGH: 'https://github.com/duncanmatt/ecomm_next',	
	},
	{
		id: 1,
		title: 'Dollar Detective',
		desc: 'iOS app that lets users view the latest CPI data and grocery prices in an intuitive interface',
		pic: 'https://d1suwrqf4r82dt.cloudfront.net/ddApp.png',
		url: 'https://apps.apple.com/us/app/dollar-detective/id6736560507',
		urlGH: 'https://github.com/duncanmatt/DollarDetective',
	},
	{
		id: 2,
		title: 'GitHub Search',
		desc: 'React app that gives users the ability to search for and view profiles on GitHub by making use of the GitHub API.',
		pic: 'https://d1suwrqf4r82dt.cloudfront.net/ghPreview.webp',
		url: 'https://github-finder-rho-ivory.vercel.app/',
		urlGH: 'https://github.com/duncanmatt/github-finder',
	},
	{
		id: 3,
		title: 'House Marketplace',
		desc: 'React app for posting or viewing real estate listings that are stored with firebase',
		pic: 'https://d1suwrqf4r82dt.cloudfront.net/rePreview.webp',
		url: 'https://house-marketplace-nu-ochre.vercel.app/',
		urlGH: 'https://github.com/duncanmatt/house-marketplace',
	},
];

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


	return (
		<>
			<div style={{position: 'relative'}}>
				<Swiper
					modules={[Pagination, A11y, Autoplay]}
					spaceBetween={20}
					loop
				autoplay={
					{delay: 5000}
				}
					simulateTouch
					slidesPerView={quad ? 4 : split ? 2 : 'auto'}
					grabCursor={true}
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
