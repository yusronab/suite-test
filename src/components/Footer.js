import iconFacebook from '../assets/facebook-official.png';
import iconTwitter from '../assets/twitter.png'

const Footer = () => {
    return(
        <footer>
            <div>Copyright &copy; 2016. PT Company</div>
            <div>
                <img src={iconFacebook} alt='ic-facebook' />
                <img src={iconTwitter} alt='ic-twitter' />
            </div>
        </footer>
    );
}

export default Footer;