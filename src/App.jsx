import './App.css';
import {Fourthh} from "./Components/Fourthh"
import {Fifth} from "./Components/Fifth"
import {Sixth} from "./Components/Sixth"
import {Callback} from "./Components/Callback"
import { useState } from 'react';

function App() {
  const [uiColor, setUiColor] = useState(null)
  return (
    <div className="App">
      {/* <Fourthh/> */}
       {/* <Fifth/>  */}
       {/* <Sixth/> */}
       <div className='to'></div>
       <Callback/>
    </div>
  );
}

export default App;
