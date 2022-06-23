import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = ({placeholder, data}) => {
    return <div className="search">
        <div className='search-input' >
        <input type="text" className='searchbar__header' placeholder={placeholder} />
        <div className='search-icon'>
            <SearchIcon/>
        </div>
        </div>
        
        
        <div className='search-result'>
            </div>
        </div>
}



export default SearchBar;