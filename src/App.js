import './App.css';

// importazione componenti
import Navbar from './components/navbar';
import Page from './components/page';

function App() {
  return (
    <>
      <div className='d-flex'>
        <Navbar />
        <Page className="flex-grow-1"/>
      </div>
    </>
  );
}

export default App;
