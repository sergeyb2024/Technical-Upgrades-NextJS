"use-client"
import SelectRaceEvent from '@/components/SelectRaceEvent';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import Main from '@/layout/Main';


const Home = () => {
  return (
    <main>
        <Header/>
          <Main/>
        <Footer/>
    </main>    
  );
}

Home.propTypes = {};
export default Home;