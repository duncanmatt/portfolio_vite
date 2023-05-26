import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterLinks = () => {
  return (
    <div className='footerLinks'>
        <a className='footerLink' href="https://linkedin.com/in/matt-duncan-601997268">
            <LinkedInIcon className='footerLinkIcon' />
        </a>
        <a className='footerLink' href="https://github.com/duncanmatt">
            <GitHubIcon className='footerLinkIcon' />
        </a>
        <a className='footerLink' href="https://www.reddit.com/user/marriedtomdn">
            <RedditIcon className='footerLinkIcon' />
        </a>
    </div>
  )
}

export default FooterLinks