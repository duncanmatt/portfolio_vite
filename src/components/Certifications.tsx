type Certification = {
	id: number;
	pic: string;
	desc: string;
	url: string;
};

type Certifications = {
	certs: Array<Certification>;
};

function Certifications({ certs }: Certifications) {
	return (
		<div className='certifications'>
			{certs.map(cert => (
				<a
					href={cert.url}
					key={cert.id}
					style={{ position: 'relative' }}>
					<div>
						<img
							className='certPic'
							src={cert.pic}
							alt={cert.desc}
						/>
						<span className='certDesc'>{cert.desc}</span>
					</div>
				</a>
			))}
		</div>
	);
}

export default Certifications;
