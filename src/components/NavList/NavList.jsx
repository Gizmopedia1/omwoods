import './NavList.scss'
import Socials from '../Socials/Socials'

function NavList() {
    return (
        <div className='navlist-socials'>
            <div className='navlist'>
                <a href="#" title="accueil">accueil</a>
                <a href="#" title="cours de yoga">cours de yoga</a>
                <a href="#" title="stages et retraites">stages et retraites</a>
                <a href="#" title="massages">massages</a>
                <a href="#" title="mon parcours">mon parcours</a>
                <a href="#" title="contact">contact</a>
            </div>
            <Socials />
        </div>        
    )
}

export default NavList