import OmwoodsBanner from '../../assets/omwoods-logo.png'
import './Banner.scss'

function Banner() {
    return (
        <div className='banner'>
            <img src={OmwoodsBanner} alt='Logo Omwoods' className="omwoods-logo" />
        </div>
    )
}

export default Banner