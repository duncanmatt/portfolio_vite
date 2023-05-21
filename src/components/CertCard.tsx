type Certification = {
	id: number;
	pic: string;
	desc: string;
	url: string;
};

const CertCard = (cert: Certification) => {
	return (
		<a
			className='cert'
			href={cert.url}
			key={cert.id}>
			<div
				style={{ position: 'relative' }}
				className='certInner'>
				<img
					className='certPic'
					src={cert.pic}
					alt={cert.desc}
				/>
			</div>
		</a>
	);
};

export default CertCard;
