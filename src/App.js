
import { useState,useEffect } from 'react';
import './App.css';
import FirstStep from './components/pages/FirstStep';
import Home from './components/pages/Home';
import LastStep from './components/pages/LastStep';
import SecondStep from './components/pages/SecondStep';
// import { Characters } from './components/Api/Characters';

function App() {

  const [page, setPage] = useState(0);
  const [firstPage, setFirstPage] = useState(false);
  const [characters,setCharacters]=useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    level: '',
    participated: true,
    character_id:''
  })

  useEffect(() => {
    fetch(`https://chess-tournament-api.devtest.ge/api/grandmasters`)
    .then((response) => response.json())
    .then(data => setCharacters(data))
  }, []);

  useEffect(() => {
    const firstStorage = localStorage.getItem('firstPage');
    if (firstStorage === 1) {
      setFirstPage(true)
    }
  },[])

  const handleNextPage = () => {setPage((currPage) => currPage + 1)};
  const handlePrevPage = () => { setPage((currPage) => currPage - 1) };
  return (
    <div className="App">
      {page === 0 && <Home onNextPage={handleNextPage} />}
      {page === 1 && <FirstStep firstPage={page} onPrevPage={handlePrevPage} onNextPage={handleNextPage} formData={formData} setFormData={setFormData} />}
      {page === 2 && <SecondStep   characters={characters} formData={formData} setFormData={setFormData} onPrevPage={handlePrevPage} onNextPage={handleNextPage} />}
      {page === 3 && <LastStep/> }
    </div>
  );
}

export default App;
