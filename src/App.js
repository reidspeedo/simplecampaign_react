import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Container from "./components/Container";
import { useState } from 'react'

function App() {

  const [containerstate, setContainerstate] = useState('Overview')
  
  const onReveal = (value) => {
    // console.log(value)
    setContainerstate(value)
  }

  return (
    <div className="main">
        <div className='sidebar'>
          <Sidebar onReveal={onReveal}/>
        </div>
        <div className='rightbar'>
          <Header text={containerstate}/>
          <div className='container'>
            <div className='container-box'>
              <Container/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
