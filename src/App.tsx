import Navbar from './layout/Navbar';
import Intro from './layout/Intro';
import Latest from './layout/Latest';
import Certified from './layout/Certified';
import Footer from './layout/Footer';

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Intro />
				<Latest />
				<Certified />
			</main>
			<Footer />
		</>
	);
}

export default App;
