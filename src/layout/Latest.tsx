import LatestContent from '../components/LatestContent';

const Latest = () => {
  return (
    <section id='latest' className='latest'>
      <div>
        <div className='headingWrapper'>
          <h2>Recent Work</h2>
        </div>
        <LatestContent />
      </div>
    </section>
  );
};

export default Latest;
