import { useState } from 'react';

interface SearchProps {
  setUrl: (newUrl: string) => void;
}

function Search({ setUrl }: SearchProps) {
  const [text, setText] = useState('');

  return (
    <section>
      <input
        type="text"
        onChange={(event) =>
          setText(`https://swapi.dev/api/people/?search=${event.target.value}`)
        }
      />
      <button onClick={() => setUrl(text)}>Search</button>
    </section>
  );
}

export default Search;
