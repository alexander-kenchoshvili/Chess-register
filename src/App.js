
import { useState } from 'react';
import './App.css';
import FirstStep from './components/pages/FirstStep';
import Home from './components/pages/Home';

function App() {
  const [page, setPage] = useState(0);
  const handleNextPage = () => { setPage((currPage) => currPage + 1) };
  const handlePrevPage = () => { setPage((currPage) => currPage - 1) };
  return (
    <div className="App">
      {page === 0 && <Home onNextPage={handleNextPage} />}
      {page === 1 && <FirstStep onPrevPage={handlePrevPage}  onNextPage={handleNextPage}/> }
    </div>
  );
}

export default App;
