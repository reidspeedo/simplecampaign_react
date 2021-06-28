import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="main">
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <div className='rightbar'>
          <header className='header'>header</header>
          <div className='container'>container</div>
        </div>
    </div>
  );
}

export default App;
