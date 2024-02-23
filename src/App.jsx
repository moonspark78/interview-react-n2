import './App.css';
import {Fourthh} from "./Components/Fourthh"
import {Fifth} from "./Components/Fifth"
import {Sixth} from "./Components/Sixth"
import {Callback} from "./Components/Callback"
import { useState } from 'react';

function App() {
  const [uiColor, setUiColor] = useState(null)

  const changeColor = (color) => {
    setUiColor(color)
  };


  return (
    <div className="App">
      {/* <Fourthh/> */}
       {/* <Fifth/>  */}
       {/* <Sixth/> */}
       <div className='to' style={{backgroundColor: uiColor}}></div>
       <Callback colo={changeColor}/>
    </div>
  );
}

export default App;
