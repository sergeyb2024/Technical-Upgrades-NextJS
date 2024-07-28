"use-client"
import SelectRaceEvent from '@/components/SelectRaceEvent';
import { getRaceEvent } from '../helperFunctions/structuredData';
import data from '../mock-data'


const Home = () => {

  const grandPrixList: Set<string> = getRaceEvent(data);

  return (
    <main>
      <div>F1 Home</div>
        <SelectRaceEvent grandPrixList={Array.from(grandPrixList)} data={data} />
    </main>    
  );
}  


Home.propTypes = {};

export default Home;