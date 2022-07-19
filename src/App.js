import './App.css';

// importazione componenti
import Navbar from './components/navbar';
import Page from './components/page';

function App() {
  return (

    <div className='d-flex'>
      <Navbar />
      <Page />
    </div>

  );
}

export default App;
