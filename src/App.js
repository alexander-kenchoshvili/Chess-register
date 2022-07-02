
import { useState } from 'react';
import './App.css';
import Home from './components/pages/Home';

function App() {
  const [page, setPage] = useState(false);
  const handlePageChange = ()=>{setPage(true)}
  return (
    <div className="App">
      {page? <div>rendered</div>: <Home onPageChange={handlePageChange} />}
    </div>
  );
}

export default App;
