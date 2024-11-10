import AboutMe from '../../components/AboutMe/AboutMe';
import Hero from '../../components/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';
import NavBarHome from '../../components/NavBar/NavBarHome';
import SideBar from '../../components/SideBar/SideBar'

function Home() {
  return (
    <>
      <div className='containerHome'>
        <SideBar />
        <div className='contentHome'>
          <Hero/>
          <NavBarHome/>
          <AboutMe/>
        </div>
      </div>
    </>
  );
}

export default Home;
