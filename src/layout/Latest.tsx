import LatestMobile from '../components/LatestMobile';
import LatestDesktop from '../components/LatestDesktop';
import { useMediaQuery } from 'react-responsive';

function Latest() {
	const isMobile = useMediaQuery({ query: '(max-width: 725px)' });

	return (
		<section className='latest'>
			{isMobile ? <LatestMobile /> : <LatestDesktop />}
		</section>
	);
}

export default Latest;
