
import { useState,useEffect } from 'react';
import { getCharacters } from './API';
import './App.css';
import FirstStep from './components/pages/FirstStep';
import Home from './components/pages/Home';
import LastStep from './components/pages/LastStep';
import SecondStep from './components/pages/SecondStep';

const initialData = {
  name: '',
  email: '',
  phone: '',
  date_of_birth: '',
  experience_level: '',
  already_participated: true,
  character_id:''
}
function getFormData() {
  let data = localStorage.getItem('formData')
  if (data) {
    return JSON.parse(data)
  }
  return initialData
}
function App() {

  const [page, setPage] = useState(Number(localStorage.getItem('page')||0));
  const [characters,setCharacters]=useState([])
  const [formData, setFormData] = useState(getFormData())

  useEffect(() => {
    getCharacters()
    .then(data => setCharacters(data))
  }, []);
  
  useEffect(() => {
    localStorage.setItem('formData',JSON.stringify(formData))
  },[formData])

  const handleNextPage = () => {
    setPage(page+1)
    localStorage.setItem('page', page+1 )
  };
  const handlePrevPage = () => {
    setPage(page - 1);
    localStorage.setItem('page',page-1)
  };
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
