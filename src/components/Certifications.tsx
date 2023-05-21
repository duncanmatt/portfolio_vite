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
	const reveal = () => {
		const certs = document.querySelectorAll('.cert');
		for (let i = 0; i < certs.length; i++) {
			const windowHeight = window.innerHeight;
			const elementTop = certs[i].getBoundingClientRect().top;
			const elementVisible = 150;
			if (elementTop < windowHeight - elementVisible) {
				certs[i].classList.remove('hidden');
				certs[i].classList.add('shown');
			} else {
				certs[i].classList.remove('shown');
				certs[i].classList.add('hidden');
			}
		}
	};
	window.addEventListener('scroll', reveal);
	reveal();

	return (
		<div className='certifications'>
			{certs.map(cert => (
				<CertCard
					key={cert.id}
					{...cert}
				/>
			))}
		</div>
	);
}

export default Certifications;
