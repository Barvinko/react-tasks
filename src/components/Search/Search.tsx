import { useState } from 'react';

interface SearchProps {
  url: string;
  setUrl: (newUrl: string) => void;
}

function Search({ url, setUrl }: SearchProps) {

  const [text, setText] = useState('');

  return (
    <section>
      <input 
        type="text" 
        value={''} 
        onChange={(event) => setText(`https://swapi.dev/api/people/?search=${event.target.value}`)}
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