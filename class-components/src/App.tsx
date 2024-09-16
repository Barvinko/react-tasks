import { useState, useEffect } from 'react';
import { getData } from './utilits/api/getData';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData('https://swapi.dev/api/people/1/').then((data) => {
      setData(data);
    }).catch((error) =>{
      console.error('Data retrieval error:', error);
    }).finally(()=>{
      setLoading(false);
    }) 
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <MainPage />
      <p>{data ? JSON.stringify(data) : 'No data available'}</p>
    </>
  );
}

export default App;
