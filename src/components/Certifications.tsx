import { Card } from 'antd';

const { Meta } = Card;

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
				<Card
					key={cert.id}
					size='small'
					cover={
						<img
							src={cert.pic}
							alt={cert.desc}
						/>
					}
					style={{
						minWidth: 'inherit',
						maxWidth: '720px',
						height: 'inherit',
						backgroundColor: '#fff',
					}}>
					<Meta description={cert.desc} />
				</Card>
			))}
		</div>
	);
}

export default Certifications;
