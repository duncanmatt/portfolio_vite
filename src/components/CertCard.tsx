import { useState } from 'react';

type Certification = {
	id: number;
	pic: string;
	desc: string;
	url: string;
};

const CertCard = (cert: Certification) => {
	const [desc, setDesc] = useState(false);
	const showDesc = () => setDesc(!desc);

	return (
		<a
			onMouseOver={showDesc}
			onMouseOut={showDesc}
			href={cert.url}
			key={cert.id}>
			<div
				className={desc ? 'certInnerDesc' : 'certInner'}
				style={{ position: 'relative' }}>
				<img
					className='certPic'
					src={cert.pic}
					alt={cert.desc}
				/>
				<span className='certDesc'>{cert.desc}</span>
			</div>
		</a>
	);
};

export default CertCard;
