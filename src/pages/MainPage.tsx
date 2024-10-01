import { useEffect, useState } from 'react';
import { getData } from '../utilits/api/getData';
import Search from '@components/Search/Search';
import Output from '@components/Output/Output';

function MainPage() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  function nameRequest() {
    setLoading(true);
    getData(url)
      .then((data) => {
        setData(data as string);
      })
      .catch((error) => {
        console.error('Data retrieval error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    nameRequest();
  }, [url]);

  console.log(data);
  return (
    <>
      <Search setUrl={setUrl} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Output
          outputData={
            data ? JSON.stringify(data) : url ? 'No data available' : ''
          }
        />
      )}
    </>
  );
}

export default MainPage;
