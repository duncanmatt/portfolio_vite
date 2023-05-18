import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

type Item = {
	id: number;
	title: string;
	desc: string;
	pic: string;
	url: string;
};

type Items = {
	items: Array<Item>;
};

function LgCarousel({ items }: Items) {
	const [activeItem, setActiveItem] = useState(0);

	const nextItem = () => {
		setActiveItem(activeItem === items.length - 1 ? 0 : activeItem + 1);
	};

	const prevItem = () => {
		setActiveItem(activeItem === 0 ? items.length : activeItem - 1);
	};

	return (
		<div className='carouselLarge'>
			<h2>Recent Work</h2>
			<div className='carousel'>
				<button
					className='carouselPrev'
					onClick={prevItem}>
					<LeftOutlined />
				</button>
				<button
					className='carouselNext'
					onClick={nextItem}>
					<RightOutlined />
				</button>
				<div className='carouselInner'>
					{items.map(item => (
						<div
							key={item.id}
							className={
								item.id !== activeItem ? 'carouselItem' : 'carouselItemActive'
							}>
							<ProjectCard {...item} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default LgCarousel;
