import { useEffect, useState } from 'react';
import { getData } from '../utilits/api/getData';
import Search from '../components/Search/Search';
import Output from '../components/Output/Output';

function MainPage() {
  const [url, setUrl] = useState('https://swapi.dev/api/people/1/');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  function nameRequest() {
    setLoading(true);
    getData(url).then((data) => {
      setData(data);
    }).catch((error) =>{
      console.error('Data retrieval error:', error);
    }).finally(()=>{
      setLoading(false);
    }) 
  }

  useEffect(() => {
    nameRequest()
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(data)
  return (
    <>
      <Search 
        url={url}
        setUrl={setUrl}
      />
      <Output 
        outputDate = {data ? JSON.stringify(data) : 'No data available'}
      />
    </>
  )
}

export default MainPage;