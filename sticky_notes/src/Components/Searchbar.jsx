import { MdSearch } from "react-icons/md"

export const Search = ({handleSearch})=>{

    return (
        <div className="search">
            <MdSearch className="search-icon" size="1.3rem"></MdSearch>
            <input 
               className="search-bar" 
               placeholder="Type Here to Search Notes"
               onChange={(e)=>handleSearch(e.target.value)}
            ></input>

        </div>
    )
}