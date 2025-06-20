import './Home.scss'
import Nav from '../../components/Nav/Nav'
import Banner from '../../components/Banner/Banner'
import LandingBio from '../../components/LandingBio/LandingBio'
import LandingServices from '../../components/LandingServices/LandingServices'
import Footer from '../../components/Footer/Footer'


function Home() {
  console.log("Home component loaded");
  return (
    <>
      <main className='main-container'>
        <Banner />
        <LandingBio />
        <LandingServices />
      </main>
    </>
  )
}

export default Home
