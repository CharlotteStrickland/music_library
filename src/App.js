import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import './App.css';

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    //const API_URL = 'https://itunes.apple.com/search?term='

    useEffect(() => {
        if(search) {
        const fetchData = async () => {
            document.title = `${search} Music`
            const response = await fetch('API_URL = search')
            const resData = await response.json();
            console.log(resData)
            if (resData.results.length > 0) {
                setData(resData.results);
                setMessage('');
            } else {
                setMessage('No Songs Found');
            }
        }
        fetchData();
    }
}, [search]);

  const handleSearch = (e, term) => {
      e.preventDefault()
      setSearch(term)
    }
    
    return (
        <div className="App">
            <header className="App-header">
                <h1>Music Library</h1>
            </header>
            <div className="content">
            <SearchBar handleSearch = {handleSearch} />
            {message ? <h2>{message}</h2> : null}
            <DataContext.Provider value={data} >
                <Gallery />
            </DataContext.Provider>
        </div>
        </div>
    );
}    

export default App