import Sidebar from "./components/Sidebar";
import { useState } from 'react'


function App() {

  const [containerstate, setContainerstate] = useState('overview')
  
  const onReveal = (value) => {
    console.log(value)
    setContainerstate(value)
  }

  return (
    <div className="main">
        <div className='sidebar'>
          <Sidebar onReveal={onReveal}/>
        </div>
        <div className='rightbar'>
          <header className='header'>{containerstate}</header>
          <div className='container'>container</div>
        </div>
    </div>
  );
}

export default App;
