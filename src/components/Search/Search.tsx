import { ArrSetLocalStorage } from '@hooks/useLocalStorage';
import { useState } from 'react';

interface SearchProps {
  setUrl: (newUrl: string) => void;
}

function Search({ setUrl }: SearchProps) {
  const [text, setText] = useState('');

  const historySearch = ArrSetLocalStorage<string>('historySearch', new Set());

  return (
    <section>
      <input type="text" onChange={(event) => setText(event.target.value)} />
      <button
        onClick={() => {
          setUrl(`https://swapi.dev/api/people/?search=${text}`);
          historySearch.addToSet(text);
        }}
      >
        Search
      </button>
    </section>
  );
}

export default Search;
