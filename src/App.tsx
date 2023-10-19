import Navbar from './layout/Navbar';
import Intro from './layout/Intro';
import Latest from './layout/Latest';
import Skills from './layout/Skills';
import Certified from './layout/Certified';
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <a id='skipNav' href='#content'>
        Skip to main content
      </a>
      <Navbar />
      <main id='content'>
        <Intro />
        <Latest />
        <Skills />
        <Certified />
      </main>
      <Footer />
    </>
  );
}

export default App;
