import { useEffect, useState } from 'react';

interface SearchProps {
  url: string;
  setUrl: (newUrl: string) => void;
}

function Search({ url, setUrl }: SearchProps) {

  const [text, setText] = useState('');
  useEffect(() => {
    setText(url)
  }, []);


  return (
    <section>
      <input 
        type="text" 
        value={text} 
        onChange={(event) => setText(event.target.value)}
      />
      <button
      onClick={() => setUrl(text)}
      >
        Search
      </button>
    </section>
  );
}

export default Search;