
import { useState } from 'react';
import './App.css';
import FirstStep from './components/pages/FirstStep';
import Home from './components/pages/Home';
import LastStep from './components/pages/LastStep';
import SecondStep from './components/pages/SecondStep';

function App() {
  const [page, setPage] = useState(0);
  const handleNextPage = () => { setPage((currPage) => currPage + 1) };
  const handlePrevPage = () => { setPage((currPage) => currPage - 1) };
  return (
    <div className="App">
      {page === 0 && <Home onNextPage={handleNextPage} />}
      {page === 1 && <FirstStep onPrevPage={handlePrevPage} onNextPage={handleNextPage} />}
      {page === 2 && <SecondStep onPrevPage={handlePrevPage} onNextPage={handleNextPage} />}
      {page === 3 && <LastStep/> }
    </div>
  );
}

export default App;
