import Navbar from './layout/Navbar';
import Intro from './layout/Intro';
import Latest from './layout/Latest';
import Certified from './layout/Certified';
import Footer from './layout/Footer';

function App() {
	return (
		<>
			<a
				id='skipNav'
				href='#content'>
				Skip to main content
			</a>
			<Navbar />
			<main id='content'>
				<Intro />
				<Latest />
				<Certified />
			</main>
			<Footer />
		</>
	);
}

export default App;
