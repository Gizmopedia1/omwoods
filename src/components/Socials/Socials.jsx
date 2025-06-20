import './Socials.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const logoInstagram = <FontAwesomeIcon icon={faInstagram} />
const logoYoutube = <FontAwesomeIcon icon={faYoutube} />
const logoFacebook = <FontAwesomeIcon icon={faFacebook} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />


function Socials() {
    return (
        <div className='my-socials'>
            <a href="https://instagram.com/omwoods" target="_blank" alt="Lien vers ma page Instagram" className="my-socials-link instagram" >{logoInstagram}</a>
            <a href="https://www.facebook.com/yogaavecagnes" target="_blank" alt="Lien vers ma page Facebook" className="my-socials-link facebook">{logoYoutube}</a>
            <a href="https://www.youtube.com/user/Orpheoh" target="_blank" alt="Lien vers ma page Youtube" className="my-socials-link youtube">{logoFacebook}</a>
            <a href="mailto:agnesblainyoga@gmail.com?subject=Message depuis Omwoods" target="_blank" alt="Envoyez-moi un mail" className="my-socials-link email">{envelope}</a>
        </div>
    )
}

export default Socials