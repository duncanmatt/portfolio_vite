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

function Certifications({ certs }: Certifications) {
	return (
		<div className='certifications'>
			{certs.map(cert => (
				<CertCard {...cert} />
			))}
		</div>
	);
}

export default Certifications;
