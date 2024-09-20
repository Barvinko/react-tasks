interface SearchProps {
  url: string;
  setUrl: (newUrl: string) => void;
}

function Search({ url, setUrl }: SearchProps) {

  return (
    <section>
      <input 
        type="text" 
        value={url} 
        onChange={(event)=> setUrl(event.target.value)}
      />
    </section>
  );
}

export default Search;