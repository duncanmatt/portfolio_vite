import { useState } from 'react';

type Certification = {
	id: number;
	pic: string;
	desc: string;
	url: string;
};

const CertCard = (cert: Certification) => {
	const [desc, setDesc] = useState(false);
	const showDesc = () => setDesc(true);
	const hideDesc = () => setDesc(false);

	return (
		<a
			onMouseOver={showDesc}
			onMouseOut={hideDesc}
			href={cert.url}
			key={cert.id}>
			<div
				style={{ position: 'relative' }}
				className={desc ? 'certInnerDesc' : 'certInner'}>
				<img
					className='certPic'
					src={cert.pic}
					alt={cert.desc}
				/>
			</div>
			<span className='certDesc'>{cert.desc}</span>
		</a>
	);
};

export default CertCard;
