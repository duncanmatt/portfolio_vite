import Certifications from '../components/Certifications';

const certs = [
	{
		id: 0,
		pic: "https://d1suwrqf4r82dt.cloudfront.net/awsCertifiedDeveloper.png",
		desc: "Passed the associate level developer exam from Amazon Web Services",
		url: 'https://aws.amazon.com/verification'
	},
	{
		id: 1,
		pic: 'https://d1suwrqf4r82dt.cloudfront.net/JSAlgoCert.webp',
		desc: 'Took this course from Colt Steele after getting comfortable with JavaScript.',
		url: 'https://www.udemy.com/certificate/UC-74c1725e-da46-415b-9268-9ac752f3145d',
	},
	{
		id: 2,
		pic: 'https://d1suwrqf4r82dt.cloudfront.net/ccpAWSCert.webp',
		desc: 'Was inspired to learn a programming language after having fun playing around with HTML/CSS.',
		url: 'https://aws.amazon.com/verification',
	},
	{
		id: 3,
		pic: 'https://d1suwrqf4r82dt.cloudfront.net/ReactFTBCert.webp',
		desc: 'A great course from Brad Traversy, one of my favorite content creators. I would highly recommend to anyone wanting to start building modern apps.',
		url: 'https://www.udemy.com/certificate/UC-cdf8de33-c1ea-462d-af3e-1f9f47f13676/',
	},
];

const Certified = () => {
	return (
		<section
			id='certified'
			className='certified'>
			<div>
				<div className='headingWrapper'>
					<h2>Certified</h2>
				</div>
				<Certifications certs={certs} />
			</div>
		</section>
	);
};

export default Certified;
