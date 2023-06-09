import DSAPic from '../layout/assets/dsa.jpg';
import ReactPic from '../layout/assets/reactCert.jpg';
import GoogleCloudPic from '../layout/assets/googleCloudPic.jpg';
import Certifications from '../components/Certifications';

function Certified() {
	const certs = [
		{
			id: 1,
			pic: DSAPic,
			desc: 'Took this course from Colt Steele after getting comfortable with JavaScript.',
			url: 'https://www.udemy.com/certificate/UC-74c1725e-da46-415b-9268-9ac752f3145d',
		},
		{
			id: 2,
			pic: GoogleCloudPic,
			desc: 'Was inspired to learn a programming language after having fun playing around with HTML/CSS.',
			url: 'https://www.coursera.org/account/accomplishments/verify/867P3BDJHCMP',
		},
		{
			id: 3,
			pic: ReactPic,
			desc: 'A great course from Brad Traversy, one of my favorite content creators. I would highly recommend to anyone wanting to start building modern apps.',
			url: 'https://www.udemy.com/certificate/UC-cdf8de33-c1ea-462d-af3e-1f9f47f13676/',
		},
	];

	return (
		<section className='certified'>
			<h2>Certified</h2>
			<Certifications certs={certs} />
		</section>
	);
}

export default Certified;
