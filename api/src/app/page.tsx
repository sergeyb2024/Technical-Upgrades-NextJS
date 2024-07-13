"use-client"
import SelectRaceEvent from '../components/SelectRaceEvent';
import { getRaceEvent } from '../helperFunctions/structuredData';
import {dbData} from '../mock-data'


export default function Home(grandPrixList) {

  grandPrixList = getRaceEvent(dbData);

  return (
    <main>
      <div>F1 App</div>
        <SelectRaceEvent grandPrixList={grandPrixList} dbData={dbData} />
    </main>    
  );
}  


