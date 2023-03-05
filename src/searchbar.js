import React from 'react';
import './App.css';


const SearchBar = ({useRefVar, searchFunc})=>{
    return (
        <div className="searchbarsq">
            <h4 className="searchbardetail">Search Your Favourite Cocktail</h4>
                <form onSubmit={e=>{ e.preventDefault()}/**/}>
                  <input ref={useRefVar} id="inputbar" type="text" onChange={searchFunc}/> {/*remember input has attributes for handlingevent*/}
                </form>
            
        </div>
    )
}

export default SearchBar;