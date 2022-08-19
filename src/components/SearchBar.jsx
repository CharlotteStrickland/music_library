import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const SearchBar = () => {
    let { term, handleSearch } = useContext(SearchContext);

    return (
        <div className="search-bar">
        <form>
            <input ref={term} type="text" placeholder="Search for music..." />  {/*props.handleSearch(e, e.target.value) */}
            <button onClick={e => handleSearch(e, term.current.value)}>Submit</button>
        </form>
        {/* {message ? <h2>{message}</h2> : null} */}
        {/*<form onSubmit={(e)=>setSearchTerm('')}><button>Clear</button></form>*/}
        </div>
    );
};

export default SearchBar;  