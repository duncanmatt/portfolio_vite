import LinkedInIcon from '../layout/assets/LinkedIn';
import GitHubIcon from '../layout/assets/Github';

const FooterLinks = () => {
  return (
    <div className='footerLinks'>
      <a
        className='footerLink'
        href='https://linkedin.com/in/matt-duncan-601997268'
      >
        <LinkedInIcon />
      </a>
      <a className='footerLink' href='https://github.com/duncanmatt'>
        <GitHubIcon />
      </a>
    </div>
  );
};

export default FooterLinks;
